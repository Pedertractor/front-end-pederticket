import { useFormContext } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { getAvailableOptions, submitVisitorRegistration } from '../../api/api';
import { VisitorRegistrationType } from '../../types/visitor-registration';
import { Input } from '../../components/ui/Input';
import { ChosenGroups } from '../../components/visitorRegistration/ChosenGroups';
import { useEffect, useState } from 'react';
// import AutocompleteInput from '../../components/ui/AutoCompleteInput';

type groupCardProps = { title: string; description: string; active: boolean };
export type availableOptionsQuery = {
  date: string;
  totalOptionOne: number;
  totalOptionTwo: number;
  totalOptionThree: number;
};

export default function VisitorRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues, isSubmitting },
    setValue,
    watch,
    reset,
    trigger,
  } = useFormContext<VisitorRegistrationType>();
  const [showPopup, setShowPopup] = useState(false);
  const [availableOptionsList, setAvailableOptions] = useState<
    groupCardProps[]
  >([]);
  const navigate = useNavigate();

  const valuesOfFamilyMembers = watch('collaborator.familyMembers');
  const valueOfChosenDay = watch('chosenDay');

  useEffect(() => {
    setValue('chosenGroup', 0);

    const fetchTicketData = async () => {
      try {
        const availableOptions: availableOptionsQuery[] =
          await getAvailableOptions();

        if (availableOptions && valueOfChosenDay !== '') {
          const valueOfChosenDayDate = new Date(valueOfChosenDay)
            .toISOString()
            .slice(0, 10);

          const existingDate = availableOptions.find((item) => {
            const valueOfChosenDayConvert = new Date(item.date)
              .toISOString()
              .slice(0, 10);

            if (valueOfChosenDayConvert === valueOfChosenDayDate) {
              return item;
            }
          });

          if (existingDate) {
            const groupCardProps = [
              {
                title: 'Turma 01',
                description: '07:30h',
                active: existingDate.totalOptionOne < 2 ? true : false,
              },
              {
                title: 'Turma 02',
                description: '10:30h',
                active: existingDate.totalOptionTwo < 2 ? true : false,
              },
              {
                title: 'Turma 03',
                description: '13:00h',
                active: existingDate.totalOptionThree < 2 ? true : false,
              },
            ];

            setAvailableOptions(groupCardProps);
          }
        } else {
          setAvailableOptions([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTicketData();
  }, [valueOfChosenDay, setValue]);

  const dayCardProps = [
    { title: 'Dia 01', description: '16/12/2024', active: true },
    { title: 'Dia 02', description: '17/12/2024', active: true },
    { title: 'Dia 03', description: '18/12/2024', active: true },
    { title: 'Dia 04', description: '19/12/2024', active: true },
    { title: 'Dia 05', description: '20/12/2024', active: true },
  ];

  const deleteFamilyMember = (rg: string) => {
    const filteredFamilyMember = valuesOfFamilyMembers?.filter(
      (item) => item.rg != rg
    );

    setValue('collaborator.familyMembers', filteredFamilyMember);
  };

  const validateSubmit = async () => {
    const isValid = await trigger();

    if (!isValid) {
      return;
    }

    if (valuesOfFamilyMembers.length > 0) {
      handleSubmit(onSubmit)();
    } else {
      setShowPopup(true);
    }
  };

  const onSubmit = async (data: VisitorRegistrationType) => {
    try {
      const result = await submitVisitorRegistration(data);

      if (result?.status == 201) {
        navigate(`/cadastrar/confirmacao`);

        reset();
      } else if (result?.status == 409) {
        setShowPopup(false);
      }
    } catch (error) {
      console.log('Ocorreu um erro ao enviar os dados.');
    }
  };

  return (
    <main className=' h-full bg-stone-200 p-4 rounded-none'>
      <form
        className='flex flex-col justify-between h-full px-6 py-6 bg-white rounded-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col min-[380px]:gap-y-2 overflow-y-auto min-h-96'>
          <h1 className='font-bold mb-4 min-[380px]:text-lg  min-[380px]:mb-6'>
            Cadastrar para o evento da família
          </h1>

          <Input
            label='Nome do colaborador:'
            name='collaborator.name'
            type='text'
            register={register}
            defaultValue={defaultValues?.collaborator?.name}
            errorsMessage={errors.collaborator?.name?.message}
          />

          <Input
            label='Cartão do colaborador:'
            name='collaborator.cardNumber'
            type='number'
            register={register}
            defaultValue={defaultValues?.collaborator?.cardNumber}
            errorsMessage={errors.collaborator?.cardNumber?.message}
          />

          <Input
            label='Setor:'
            name='collaborator.sector'
            type='text'
            register={register}
            defaultValue={defaultValues?.collaborator?.sector}
            errorsMessage={errors.collaborator?.sector?.message}
          />

          <Input
            label='Número de celular:'
            name='collaborator.telephoneNumber'
            type='text'
            register={register}
            defaultValue={defaultValues?.collaborator?.telephoneNumber}
            errorsMessage={errors.collaborator?.telephoneNumber?.message}
          />

          <ChosenGroups
            name='chosenDay'
            label='Selecione o dia:'
            value={[
              '2024-12-16',
              '2024-12-17',
              '2024-12-18',
              '2024-12-19',
              '2024-12-20',
            ]}
            register={register}
            defaultValue={defaultValues?.chosenDay}
            cardProps={dayCardProps}
            errorMessage={errors.chosenDay?.message}
          />

          {availableOptionsList.length > 0 ? (
            <ChosenGroups
              name='chosenGroup'
              label='Selecione o dia:'
              value={[1, 2, 3]}
              register={register}
              defaultValue={defaultValues?.chosenGroup}
              cardProps={availableOptionsList}
              errorMessage={errors.chosenGroup?.message}
            />
          ) : (
            ''
          )}
        </div>

        {valuesOfFamilyMembers && valuesOfFamilyMembers?.length > 0 && (
          <div className='flex flex-col min-h-28'>
            <p className='text-sm font-semibold min-[380px]:text-base'>
              Membros da família:
            </p>
            <ul className='grid grid-cols-2 gap-x-2 gap-y-2'>
              {valuesOfFamilyMembers?.map((member, index) => (
                <li
                  key={index}
                  className='flex p-0.5 items-center justify-between border-2 border-dashed border-red-700 text-sm col-span-1 text-center font-bold text-red-700 min-[380px]:py-1.5  min-[380px]:text-base'
                >
                  <span className='flex-1'>{member.name}</span>
                  <button
                    type='button'
                    onClick={() => deleteFamilyMember(member.rg)}
                  >
                    <IoClose className='size-5' />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className='flex gap-x-4'>
          <Link
            to={
              valuesOfFamilyMembers && valuesOfFamilyMembers.length < 3
                ? '/cadastrar/adicionar-familia'
                : '#'
            }
            className='flex-1 py-2.5 bg-stone-500 rounded-md font-semibold text-white text-center min-[380px]:text-lg min-[380px]:py-4'
            type='button'
          >
            + Familiar
          </Link>

          <button
            className={
              isSubmitting
                ? 'flex-1 py-2.5 bg-emerald-700 rounded-md font-semibold text-white min-[380px]:text-lg min-[380px]:py-4'
                : 'flex-1 py-2.5 bg-[#20A459] rounded-md font-semibold text-white min-[380px]:text-lg min-[380px]:py-4'
            }
            type='button'
            disabled={isSubmitting}
            onClick={validateSubmit}
          >
            Concluir
          </button>
        </div>
        {showPopup && (
          <div
            className='fixed bottom-0 right-0 left-0 top-0 justify-center items-center backdrop-blur-md'
            // onClick={() => setShowPopup(false)}
          >
            <div className='flex h-screen justify-center items-center'>
              <div className='bg-stone-200 p-8 w-10/12 border-2 rounded-md'>
                <p>
                  Tem certeza que não deseja adicionar nenhum membro da familia?
                </p>
                <div className='flex justify-around mt-6'>
                  <button
                    type='button'
                    className='underline flex-1'
                    onClick={() => setShowPopup(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className={
                      isSubmitting
                        ? 'bg-emerald-700 p-2 flex-1 rounded-md text-emerald-300'
                        : 'bg-[#20A459] p-2 flex-1 rounded-md'
                    }
                    type='button'
                    disabled={isSubmitting}
                    onClick={() => {
                      handleSubmit(onSubmit)();
                    }}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </main>
  );
}

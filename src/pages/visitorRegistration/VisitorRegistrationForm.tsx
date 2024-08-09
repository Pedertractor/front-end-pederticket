import { useFormContext } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import {
  checkDuplicatedCardNumber,
  getAvailableOptions,
  submitVisitorRegistration,
} from '../../api/api';
import {
  availableOptionsQueryType,
  groupCardType,
  VisitorRegistrationType,
} from '../../types/visitor-registration';
import { Input } from '../../components/ui/Input';
import { ChosenGroups } from '../../components/visitorRegistration/ChosenGroups';
import { useEffect, useState } from 'react';
import { InputWithMask } from '../../components/ui/InputWithMask';
import { toast } from '@/components/ui/use-toast';
import { DAY_CARD_PROPS, INDUSTRY } from '@/common/constants';

export default function VisitorRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues, isSubmitting },
    getValues,
    setError,
    setValue,
    watch,
    reset,
    trigger,
    control,
  } = useFormContext<VisitorRegistrationType>();

  const [showPopup, setShowPopup] = useState(false);
  const [availableOptions, setAvailableOptions] = useState<groupCardType[]>([]);
  const navigate = useNavigate();

  const valuesOfFamilyMembers = watch('collaborator.familyMembers');
  const valueOfChosenDay = watch('chosenDay');

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const availableOptionsData: availableOptionsQueryType[] =
          await getAvailableOptions();

        if (availableOptionsData && valueOfChosenDay !== '') {
          const valueOfChosenDayDate = new Date(valueOfChosenDay)
            .toISOString()
            .slice(0, 10);

          const existingDate = availableOptionsData.find((item) => {
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
                value: 1,
              },
              {
                title: 'Turma 02',
                description: '10:30h',
                active: existingDate.totalOptionTwo < 2 ? true : false,
                value: 2,
              },
              {
                title: 'Turma 03',
                description: '13:00h',
                active: existingDate.totalOptionThree < 2 ? true : false,
                value: 3,
              },
            ];

            const disableOptions = groupCardProps.find(
              (item) => item.active === false
            );

            if (disableOptions) {
              setValue('chosenGroup', 0);
            }

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

  const deleteFamilyMember = (rg: string) => {
    const filteredFamilyMember = valuesOfFamilyMembers?.filter(
      (item) => item.rg != rg
    );

    setValue('collaborator.familyMembers', filteredFamilyMember);

    toast({
      title: 'Membro da familia removido!',
      duration: 2000,
      className: 'border border-amber-400 w-11/12 mx-auto mt-2',
    });
  };

  const validateSubmit = async () => {
    const cardNumber = getValues('collaborator.cardNumber');
    const industry = getValues('collaborator.industry');

    const isValid = await trigger();

    if (!isValid) {
      return;
    }

    const isDuplicated = await checkDuplicatedCardNumber(
      parseInt(cardNumber),
      industry
    );

    if (isDuplicated.existing === true) {
      setError('collaborator.cardNumber', {
        type: 'manual',
        message: 'O cartão já está registrado!',
      });

      toast({
        title: 'Cartão já registrado!',
        className: 'border border-red-400 w-11/12 mx-auto mt-2',
        duration: 2000,
      });
    } else {
      if (valuesOfFamilyMembers.length > 0) {
        handleSubmit(onSubmit)();
      } else {
        setShowPopup(true);
      }
    }
  };

  const onSubmit = async (data: VisitorRegistrationType) => {
    console.log(data);
    try {
      const result = await submitVisitorRegistration(data);

      if (result > 0) {
        navigate(`/ingresso/${result}`);

        reset();
      } else {
        setShowPopup(false);
      }
    } catch (error) {
      console.log('Ocorreu um erro ao enviar os dados.');
    }
  };

  return (
    <main className=' h-full bg-stone-200 p-4 rounded-none'>
      <form
        className='flex flex-col justify-between h-full px-6 py-6 bg-white rounded-md overflow-y-auto min-h-96'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col min-[380px]:gap-y-2'>
          <h1 className='font-bold mb-4 min-[380px]:text-lg  min-[380px]:mb-6'>
            Área de cadastro
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
          <ChosenGroups
            control={control}
            name='collaborator.industry'
            label='Selecione a empresa:'
            value={['pedertractor', 'tractor']}
            register={register}
            defaultValue={defaultValues?.collaborator?.industry}
            cardProps={INDUSTRY}
            errorMessage={errors.collaborator?.industry?.message}
          />
          <Input
            label='Setor:'
            name='collaborator.sector'
            type='text'
            register={register}
            defaultValue={defaultValues?.collaborator?.sector}
            errorsMessage={errors.collaborator?.sector?.message}
          />
          <InputWithMask
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
            control={control}
            defaultValue={defaultValues?.chosenDay}
            cardProps={DAY_CARD_PROPS}
            errorMessage={errors.chosenDay?.message}
          />
          {availableOptions.length > 0 ? (
            <ChosenGroups
              name='chosenGroup'
              label='Selecione a turma:'
              value={[1, 2, 3]}
              register={register}
              control={control}
              defaultValue={defaultValues?.chosenGroup}
              cardProps={availableOptions}
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
                  <span className='flex-1'>{`${member.name.split(' ')[0]} ${
                    member.name.split(' ')[1] !== undefined
                      ? member.name.split(' ')[1]
                      : ''
                  }`}</span>
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
            to={'/cadastrar/adicionar-familia'}
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
          <div className='fixed bottom-0 right-0 left-0 top-0 justify-center items-center backdrop-blur-md'>
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

import { useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { FamilyMemberSchema } from '../../schemas/visitor-registration';
import { DEGREE_OF_KINSHIP } from '../../common/constants';
import {
  FamilyMemberType,
  VisitorRegistrationType,
} from '../../types/visitor-registration';
import { InputRHF } from '../../components/ui/InputRHF';
import { InputSelect } from '../../components/ui/InputSelect';
import { toast } from '@/components/ui/use-toast';
import { InputWithMask } from '@/components/ui/InputWithMask';

export default function AddFamilyMember() {
  const { getValues, setValue } = useFormContext<VisitorRegistrationType>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues },
  } = useForm<FamilyMemberType>({
    defaultValues: {
      name: '',
      rg: '',
      dateOfBirth: undefined,
      degreeOfKinship: undefined,
    },
    resolver: zodResolver(FamilyMemberSchema),
    mode: 'onTouched',
  });

  const handleSubmitForm = (data: FamilyMemberType) => {
    const familyMembers = getValues('collaborator.familyMembers');

    setValue(
      'collaborator.familyMembers',
      familyMembers ? [...familyMembers, data] : [data]
    );

    toast({
      title: 'Membro da familia adicionado.',
      duration: 2000,
      className: 'border border-green-400 w-11/12 mx-auto mt-2',
    });

    navigate('/cadastrar');
  };

  return (
    <main className='p-4 h-full bg-stone-200'>
      <form
        className='flex flex-col gap-y-2 h-full px-6 py-8 bg-white rounded-md'
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h1 className='font-bold mb-3  min-[380px]:mb-5 min-[380px]:text-lg'>
          Cadastrar para o evento da família
        </h1>

        <InputRHF
          label='Nome do familiar:'
          name='name'
          type='text'
          register={register}
          defaultValue={defaultValues?.name}
          errorsMessage={errors.name?.message}
        />

        {/* <InputRHF
          label='RG do familiar:'
          name='rg'
          type='text'
          register={register}
          defaultValue={defaultValues?.rg}
          errorsMessage={errors.rg?.message}
        /> */}

        <InputWithMask
          label='CPF do familiar:'
          name='rg'
          type='text'
          mask='___.___.___-__'
          register={register}
          defaultValue={defaultValues?.rg}
          errorsMessage={errors.rg?.message}
        />

        <InputRHF
          label='Data de nascimento:'
          name='dateOfBirth'
          type='date'
          register={register}
          defaultValue={defaultValues?.dateOfBirth}
          errorsMessage={errors.dateOfBirth?.message}
        />

        <InputSelect
          label='Grau de parentesco:'
          name='degreeOfKinship'
          register={register}
          errorsMessage={errors.dateOfBirth?.message}
          options={DEGREE_OF_KINSHIP}
        />

        <div className='mt-auto'>
          <button
            className='bg-[#820300] p-2 rounded-md text-white font-bold text-center w-full  min-[380px]:text-lg  min-[380px]:py-4'
            type='submit'
          >
            Registrar familiar
          </button>
        </div>
      </form>
    </main>
  );
}

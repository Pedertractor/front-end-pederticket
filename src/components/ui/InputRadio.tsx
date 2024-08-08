import {
  UseFormRegister,
  Path,
  PathValue,
  FieldValues,
  Controller,
  Control,
} from 'react-hook-form';

interface InputFieldProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  value: string | number;
  register: UseFormRegister<TFormValues>;
  defaultValue?: PathValue<TFormValues, Path<TFormValues>>;
  content: React.ReactNode;
  active: boolean;
  control: Control<TFormValues>;
}

export function InputRadio<TFormValues extends FieldValues>({
  name,
  value,
  register,
  content,
  active,
  control,
}: InputFieldProps<TFormValues>) {
  return (
    <div
      className={`${
        name === 'collaborator.industry'
          ? 'flex flex-col w-full '
          : 'flex flex-grow justify-center'
      } `}
    >
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <label className='sm:min-w-40'>
            <input
              {...register(name)}
              className='hidden peer'
              type='radio'
              value={value}
              disabled={!active}
              defaultChecked={field.value === value && active}
            />
            {content}
          </label>
        )}
      />
    </div>
  );
}

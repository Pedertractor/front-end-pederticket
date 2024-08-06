import { UseFormRegister, Path, PathValue, FieldValues } from 'react-hook-form';

interface InputFieldProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  value: string | number;
  register: UseFormRegister<TFormValues>;
  defaultValue?: PathValue<TFormValues, Path<TFormValues>>;
  content: React.ReactNode;
  active: boolean;
}

export function InputRadio<TFormValues extends FieldValues>({
  name,
  value,
  register,
  defaultValue,
  content,
  active,
}: InputFieldProps<TFormValues>) {
  return (
    <div className='flex flex-grow justify-center'>
      <label className='sm:min-w-40'>
        <input
          {...register(name)}
          className='hidden peer'
          type='radio'
          value={value}
          disabled={!active}
          defaultChecked={value === defaultValue}
        />
        {content}
      </label>
    </div>
  );
}

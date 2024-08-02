import { UseFormRegister, Path, PathValue, FieldValues } from 'react-hook-form';

interface InputFieldProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  value: string | number;
  register: UseFormRegister<TFormValues>;
  defaultValue?: PathValue<TFormValues, Path<TFormValues>>;
  content: React.ReactNode;
}

export function InputRadio<TFormValues extends FieldValues>({
  name,
  value,
  register,
  defaultValue,
  content,
}: InputFieldProps<TFormValues>) {
  return (
    <div className='flex-1'>
      <label>
        <input
          {...register(name)}
          className='hidden peer'
          type='radio'
          value={value}
          defaultChecked={value === defaultValue}
        />
        {content}
      </label>
    </div>
  );
}

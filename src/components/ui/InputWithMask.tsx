import { UseFormRegister, Path, PathValue, FieldValues } from 'react-hook-form';
import { InputMask } from '@react-input/mask';

interface InputFieldProps<TFormValues extends FieldValues> {
  label: string;
  name: Path<TFormValues>;
  type: 'text' | 'date' | 'number';
  errorsMessage: string | undefined;
  register: UseFormRegister<TFormValues>;
  defaultValue?: PathValue<TFormValues, Path<TFormValues>>;
}

export function InputWithMask<TFormValues extends FieldValues>({
  label,
  name,
  errorsMessage,
  register,
  defaultValue,
}: InputFieldProps<TFormValues>) {
  return (
    <div>
      <label className='text-sm font-semibold min-[380px]:text-base'>
        {label}
        <InputMask
          {...register(name)}
          mask='(__) _____-____'
          replacement={{ _: /\d/ }}
          className='w-full border-2 p-1.5 min-[380px]:py-2.5 rounded-md'
          defaultValue={defaultValue as string | number | undefined}
        />
      </label>
      <div className='flex min-h-4'>
        {errorsMessage && (
          <span className='text-xs text-red-600'>{errorsMessage}</span>
        )}
      </div>
    </div>
  );
}

import { UseFormRegister, Path, PathValue, FieldValues } from 'react-hook-form';

interface Option {
  name: string;
  value: string;
}

interface InputFieldProps<TFormValues extends FieldValues> {
  label: string;
  name: Path<TFormValues>;
  options?: Option[];
  register: UseFormRegister<TFormValues>;
  errorsMessage: string | undefined;
  placeholder?: string;
  multiple?: boolean;
  defaultValue?: PathValue<TFormValues, Path<TFormValues>>;
}

export function InputSelect<TFormValues extends FieldValues>({
  label,
  name,
  options = [],
  register,
  multiple = false,
  defaultValue,
}: InputFieldProps<TFormValues>) {
  return (
    <div>
      <label className='text-sm font-semibold  min-[380px]:text-base'>
        {label}
        <select
          {...register(name)}
          className='w-full border-2 p-1.5 rounded-md divide-y  min-[380px]:py-2.5'
          defaultValue={defaultValue as string | string[] | undefined}
          multiple={multiple}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

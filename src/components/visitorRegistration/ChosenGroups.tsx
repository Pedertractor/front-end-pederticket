import { UseFormRegister, Path, PathValue, FieldValues } from 'react-hook-form';
import { InputRadio } from '../ui/InputRadio';
import ChosenOptionsCard from './ChosenOptionsCard';

type cardProps = {
  title: string;
  description: string;
};

interface InputFieldProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  label: string;
  value: string[] | number[];
  register: UseFormRegister<TFormValues>;
  defaultValue?: PathValue<TFormValues, Path<TFormValues>>;
  errorMessage: string | undefined;
  cardProps: cardProps[];
}

export function ChosenGroups<TFormValues extends FieldValues>({
  name,
  label,
  value,
  register,
  defaultValue,
  errorMessage,
  cardProps,
}: InputFieldProps<TFormValues>) {
  return (
    <div>
      <p className='text-sm font-semibold min-[380px]:text-base'>{label}</p>

      <div className='flex gap-x-2 leading-none'>
        {value.map((value, index) => (
          <InputRadio
            key={index}
            name={name}
            value={value}
            register={register}
            defaultValue={defaultValue}
            content={
              <ChosenOptionsCard
                title={cardProps[index].title}
                description={cardProps[index].description}
              />
            }
          />
        ))}
      </div>
      <div className='flex min-h-4'>
        {errorMessage && (
          <span className='text-xs text-red-600'>{errorMessage}</span>
        )}
      </div>
    </div>
  );
}

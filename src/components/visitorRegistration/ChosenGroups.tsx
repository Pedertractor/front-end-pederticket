import {
  UseFormRegister,
  Path,
  PathValue,
  FieldValues,
  Control,
} from 'react-hook-form';
import { InputRadio } from '../ui/InputRadio';
import ChosenOptionsCard from './ChosenOptionsCard';

type cardProps = {
  title: string;
  description: string;
  active: boolean;
};

interface InputFieldProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  label: string;
  value: string[] | number[];
  register: UseFormRegister<TFormValues>;
  defaultValue?: PathValue<TFormValues, Path<TFormValues>>;
  errorMessage: string | undefined;
  cardProps: cardProps[];
  control: Control<TFormValues>;
}

export function ChosenGroups<TFormValues extends FieldValues>({
  name,
  label,
  value,
  register,
  defaultValue,
  errorMessage,
  cardProps,
  control,
}: InputFieldProps<TFormValues>) {
  return (
    <div>
      <p className='text-sm font-semibold min-[380px]:text-base'>{label}</p>

      <div className='flex flex-wrap gap-y-2 gap-x-2 leading-none'>
        {cardProps &&
          value.map((value, index) => (
            <InputRadio
              key={index}
              name={name}
              value={value}
              register={register}
              control={control}
              defaultValue={defaultValue}
              active={cardProps[index].active}
              content={
                <ChosenOptionsCard
                  active={cardProps[index].active}
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

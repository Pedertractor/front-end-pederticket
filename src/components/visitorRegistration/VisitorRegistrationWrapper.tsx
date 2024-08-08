import { FormProvider, useForm } from 'react-hook-form';
import { Route, Routes } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import VisitorRegistrationForm from '../../pages/visitorRegistration/VisitorRegistrationForm';
import AddFamilyMember from '../../pages/visitorRegistration/AddFamilyMember';
import { VisitorRegistrationSchema } from '../../schemas/visitor-registration';
import { VisitorRegistrationType } from '../../types/visitor-registration';

export function VisitorRegistrationWrapper() {
  const methods = useForm<VisitorRegistrationType>({
    resolver: zodResolver(VisitorRegistrationSchema),
    defaultValues: {
      chosenDay: '',
      chosenGroup: 0,
      collaborator: {
        name: '',
        cardNumber: '',
        industry: '',
        sector: '',
        telephoneNumber: '',
        familyMembers: [],
      },
    },
    mode: 'all',
  });

  return (
    <FormProvider {...methods}>
      <Routes>
        <Route path='/' element={<VisitorRegistrationForm />} />
        <Route path='/adicionar-familia' element={<AddFamilyMember />} />
      </Routes>
    </FormProvider>
  );
}

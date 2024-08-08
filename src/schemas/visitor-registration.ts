import { z } from 'zod';

export const FamilyMemberSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório!'),
  rg: z.string().length(9, 'Digite um RG válido'),
  dateOfBirth: z.coerce
    .date({
      errorMap: (issue) => ({
        message:
          issue.code === 'invalid_date' ? 'Selecione uma data válida!' : '',
      }),
    })
    .max(new Date(), { message: 'A data não pode estar no futuro' }),
  degreeOfKinship: z.enum([
    'children',
    'husband',
    'parents',
    'uncles',
    'brothers',
  ]),
});

export const CollaboratorSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório!'),
  cardNumber: z.coerce
    .number()
    .min(1, 'Cartão é obrigatório!')
    .max(999999, 'Digite um cartão válido!'),
  sector: z.string().min(1, 'Setor é obrigatório!'),
  telephoneNumber: z.string().min(1, 'Telefone é obrigatório!'),
  familyMembers: z.array(FamilyMemberSchema).optional(),
});

export const VisitorRegistrationSchema = z.object({
  chosenDay: z
    .string()
    .min(1, 'Selecionar dia é obrigatório!')
    .transform((val) => {
      const date = new Date(`${val}T12:00:00Z`);

      return date;
    }),
  chosenGroup: z.coerce.number().min(1, 'Escolher um grupo é obrigatório'),
  collaborator: CollaboratorSchema,
});

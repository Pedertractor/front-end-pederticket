import { Register } from '@/types/visitor-registration';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Register>[] = [
  {
    accessorKey: 'ticketId',
    header: 'N° Ticket',
  },
  {
    accessorKey: 'collaboratorName',
    header: 'Nome do colaborador',
  },
  {
    accessorKey: 'cardNumber',
    header: 'N° Cartão',
  },
  {
    accessorKey: 'qtdFamilyMembers',
    header: 'Quant. Familiares',
  },
];

import { Register } from '@/types/visitor-registration';
import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { FaPen, FaRegEye, FaRegTrashAlt } from 'react-icons/fa';
import { LuArrowUpDown } from 'react-icons/lu';

export const columns: ColumnDef<Register>[] = [
  {
    accessorKey: 'ticketId',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          N° Ticket
          <LuArrowUpDown className='ml-2 size-3' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'collaboratorName',
    header: 'Nome do colaborador',
  },
  {
    accessorKey: 'cardNumber',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          N° Cartão
          <LuArrowUpDown className='ml-2 size-3' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'qtdFamilyMembers',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Quant. Familiares
          <LuArrowUpDown className='ml-2 size-3' />
        </Button>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const register = row.original;
      console.log(register);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'ghost'}>
              <IoEllipsisHorizontal className='size-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>
              <FaRegEye className='fill-green-600 mr-2' />
              Expandir
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FaPen className='fill-yellow-500 mr-2' />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FaRegTrashAlt className='fill-red-600 mr-2' />
              Deletar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

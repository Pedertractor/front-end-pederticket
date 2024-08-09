import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Input } from '../ui/input';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const totalPages = Math.ceil(table.getRowModel().rows.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = columnFilters
    ? table.getRowModel().rows.slice(startIndex, endIndex)
    : table.getRowModel().rows;

  return (
    <div>
      <div className='flex items-center py-4'>
        <Input
          placeholder='Filtrar Ticket'
          value={
            (table.getColumn('ticketId')?.getFilterValue() as number) ?? ''
          }
          onChange={(event) =>
            table.getColumn('ticketId')?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        />
        <Input
          placeholder='Filtrar cartão'
          value={
            (table.getColumn('cardNumber')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('cardNumber')?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        />
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className='min-h-96'>
            {currentRows.length ? (
              currentRows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  Ainda não possui nenhum cadastro.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-center space-x-2 py-4'>
        <Button
          variant='outline'
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
          disabled={currentPage === 0}
        >
          Anterior
        </Button>
        <span>
          Página {currentPage + 1} de {totalPages}
        </span>
        <Button
          variant='outline'
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages - 1}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}

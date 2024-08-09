import { getAllRegisters } from '@/api/api';
import { columns } from '@/components/registerList/columns';
import { DataTable } from '@/components/registerList/data-table';
import { Register } from '@/types/visitor-registration';
import { useEffect, useState } from 'react';

export default function RegisterList() {
  const [data, setData] = useState<Register[]>([]);

  useEffect(() => {
    const fetchRegisters = async () => {
      try {
        const registers = await getAllRegisters();

        if (registers.length > 0) {
          setData(registers);
        } else {
          setData([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchRegisters();
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

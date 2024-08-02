import { CiAlarmOn, CiCalendar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FrequentlyAsked } from '../../components/visitorRegistration/FrequentlyAsked';

export default function Informations() {
  return (
    <main className='p-4 h-full bg-stone-200'>
      <div className='h-full flex flex-col px-6 py-8 bg-white rounded-md'>
        <section className='mb-10'>
          <h1 className='font-bold mb-2'>O que é Semana da Família?</h1>
          <p className='text-sm min-[380px]:text-base'>
            É um evento designado aos familiares dos colaboradores do grupo
            Pedertractor & Tractorcomponents...
          </p>
        </section>

        <FrequentlyAsked />

        <section className='mb-8'>
          <h2 className='font-bold mb-2 min-[380px]:text-lg'>
            Datas e horários do evento
          </h2>
          <span className='flex items-center gap-x-2 h-8 text-sm min-[380px]:text-base'>
            <CiCalendar className='size-6' />
            20/12/2024 - 21/12/2024 - 22/12/2024
          </span>
          <span className='flex items-center gap-x-2 h-8 text-sm min-[380px]:text-base'>
            <CiAlarmOn className='size-6' />
            08:00h - 10:30h - 13:30h
          </span>
        </section>

        <div>
          <Link
            to='/cadastrar'
            className='bg-[#820300] p-2 rounded-md text-white font-bold text-center block min-[380px]:text-xl'
          >
            Cadastrar Família
          </Link>
        </div>
      </div>
    </main>
  );
}

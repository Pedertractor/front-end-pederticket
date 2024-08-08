import { CiAlarmOn, CiCalendar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FrequentlyAsked } from '../../components/visitorRegistration/FrequentlyAsked';

export default function Informations() {
  return (
    <main className='p-4 h-full bg-stone-200'>
      <div className=' max-h-[100%] overflow-y-auto flex flex-col px-6 py-8 bg-white rounded-md'>
        <section>
          <h1 className='font-bold mb-2'>O que é a Semana da Família?</h1>
          <p className='text-sm min-[380px]:text-base'>
            É um evento designado aos familiares dos colaboradores do grupo
            Pedertractor & Tractorcomponents...
          </p>
        </section>

        <section className='my-6'>
          <h2 className='font-bold mb-2 min-[380px]:text-lg'>
            Datas e horários do evento
          </h2>
          <p className='flex items-center gap-x-2 h-8 text-sm min-[380px]:text-base'>
            <CiCalendar size={24} />
            <span>16, 17, 18, 19 e 20 de Dezembro de 2024</span>
          </p>
          <p className='flex items-center mt-2 gap-x-2 h-8 text-sm min-[380px]:text-base'>
            <CiAlarmOn size={22} />
            07:30h - 10:30h - 13:00h
          </p>
        </section>

        <FrequentlyAsked />

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

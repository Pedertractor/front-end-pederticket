import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <main className='p-4 h-full bg-stone-200'>
      <section className='flex flex-col h-full p-6 pt-16 bg-white rounded-md'>
        <div className='flex flex-col gap-y-2 font-semibold text-center'>
          <h1 className='text-2xl min-[380px]:text-3xl'>
            <span className='text-[#820300]'>2ª</span> Semana da Família
          </h1>
          <span className='min-[380px]:text-xl'>
            Pedertractor & Tractorcomponents
          </span>
        </div>

        <div className='h-full'>
          <div className='m-auto h-full flex justify-center items-center min-[380px]:w-60 min-[520px]:w-72'>
            <img
              src='src\assets\People-Streamline-Manchester.png'
              alt=''
              className=''
            />
          </div>
        </div>

        <div className='flex flex-col items-center gap-y-5'>
          <Link
            to='/sobre'
            className='bg-[#820300] p-4 rounded-md w-full max-w-72 text-white font-bold text-center min-[380px]:text-xl block'
          >
            VAMOS LÁ!
          </Link>
          <Link
            to='#'
            className='underline text-sm min-[380px]:text-base block'
          >
            termos de uso
          </Link>
        </div>
      </section>
    </main>
  );
}

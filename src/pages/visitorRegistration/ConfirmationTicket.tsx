// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TicketDataType } from '../../types/visitor-registration';

const ticketData = {
  data: '23/12/2024',
  horario: '13:00h',
  quantidadeFamiliares: '03 pessoas',
  cartao: 3131,
  valor: 0.0,
  codigo: 123456789,
};

export default function ConfirmationTicket() {
  // const [ticket, setTicket] = useState<TicketDataType>();
  // const { publicTicketId } = useParams() as { publicTicketId: string };

  // const

  // useEffect(() => {
  //   async () => {
  //     const ticketData = await getTicket(publicTicketId);

  //     console.log(ticketData);
  //     // if (ticketData) {
  //     //   setTicket(ticketData);
  //     // }
  //   };
  // }, [publicTicketId]);

  return (
    <main className='h-full bg-stone-200 p-4'>
      <div className='flex flex-col h-full'>
        <section className='bg-white rounded-t-md px-4'>
          <div className='flex justify-between py-6 px-2 bg-white'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
              alt=''
              className='size-8'
            />
            <span className='font-medium min-[380px]:text-lg'>
              Aqui está seu ticket!!
            </span>
            <img
              src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
              alt=''
              className='size-8 -rotate-90'
            />
          </div>
          <div className='pb-6 px-2 bg-white'>
            <h1 className='font-bold min-[380px]:text-lg'>
              2ª Semana da Família
            </h1>
            <p className='text-sm text-stone-600 min-[380px]:text-base'>
              mostre esse ticket na entrada do evento
            </p>
          </div>
          <hr className='h-0.5 bg-stone-200' />
        </section>

        <section className='px-6 pt-8 pb-8 bg-white border-b-4 border-dashed corner-bottom'>
          <div className='grid grid-cols-2 gap-y-4 text-sm min-[380px]:text-base min-[380px]:gap-y-6'>
            <div className='col-span-2'>
              <p className='font-semibold text-stone-600'>Descrição</p>
              <p>2ª Semana da família do grupo Pedertractor</p>
            </div>
            <div className='col-span-2'>
              <p className='font-semibold text-stone-600'>Local do evento</p>
              <p>Industria Pedertractor</p>
            </div>
            <div className='col-span-1'>
              <p className='font-semibold text-stone-600'>Data</p>
              <p>{ticketData.data}</p>
            </div>
            <div className='col-span-1'>
              <p className='font-semibold text-stone-600'>Horário</p>
              <p>{ticketData.horario}</p>
            </div>
            <div className='col-span-1'>
              <p className='font-semibold text-stone-600'>Quant. familiares</p>
              <p>{ticketData.quantidadeFamiliares}</p>
            </div>
            <div className='col-span-1'>
              <p className='font-semibold text-stone-600'>Cartão</p>
              <p>{ticketData.cartao}</p>
            </div>
            <div className='col-span-1'>
              <p className='font-semibold text-stone-600'>Valor</p>
              <p>
                {ticketData.valor.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </div>
            {/* <div className='col-span-1'>
              <p className='font-semibold text-stone-600'>Código do ticket</p>
              <p>{ticketData.codigo}</p>
            </div> */}
          </div>
        </section>

        <section className='flex items-center justify-center h-full p-6 corner-top bg-white rounded-b-md'>
          <div className='col-span-1 w-9/12 rounded-md'>
            <p className='text-stone-600 text-center font-bold'>
              Código do ticket
            </p>
            <p className='text-center text-xl font-bold'>{ticketData.codigo}</p>
          </div>
        </section>
      </div>
    </main>
  );
}

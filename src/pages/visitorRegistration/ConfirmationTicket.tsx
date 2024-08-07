import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTicket } from '../../api/api';
import { TicketDataType } from '../../types/visitor-registration';

export default function ConfirmationTicket() {
  const [ticket, setTicket] = useState<TicketDataType>();
  const { publicTicketId } = useParams() as { publicTicketId: string };

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const ticketData = await getTicket(publicTicketId);

        if (ticketData) {
          setTicket(ticketData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTicketData();
  }, [publicTicketId]);

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

        {ticket?.ticket && (
          <>
            <section className='px-6 pt-8 pb-8 bg-white border-b-4 border-dashed corner-bottom h-full'>
              <div className='grid grid-cols-2 gap-y-4 text-sm min-[380px]:text-base min-[380px]:gap-y-6'>
                <div className='col-span-2'>
                  <p className='font-semibold text-stone-600'>Descrição</p>
                  <p>2ª Semana da família do grupo Pedertractor</p>
                </div>
                <div className='col-span-2'>
                  <p className='font-semibold text-stone-600'>
                    Local do evento
                  </p>
                  <p>Industria Pedertractor</p>
                </div>
                <div className='col-span-2'>
                  <p className='font-semibold text-stone-600'>
                    Nome do colaborador
                  </p>
                  <p>{ticket.ticket.nome}</p>
                </div>
                <div className='col-span-1'>
                  <p className='font-semibold text-stone-600'>Data escolhida</p>
                  <p>{ticket.ticket.data}</p>
                </div>
                <div className='col-span-1'>
                  <p className='font-semibold text-stone-600'>Horário</p>
                  <p>{ticket.ticket.horario}</p>
                </div>
                <div className='col-span-1'>
                  <p className='font-semibold text-stone-600'>
                    Quant. familiares
                  </p>

                  {ticket.ticket.quantidadeFamiliares == 0 ? (
                    <p>Sem familiares</p>
                  ) : (
                    <p>
                      {`0${ticket.ticket.quantidadeFamiliares} familiar${
                        ticket.ticket.quantidadeFamiliares > 1 ? 'es' : ''
                      }`}
                    </p>
                  )}
                </div>
                <div className='col-span-1'>
                  <p className='font-semibold text-stone-600'>Cartão</p>
                  <p>{ticket.ticket.numeroCartao}</p>
                </div>
              </div>
            </section>

            <section className='flex items-center justify-center h-full p-6 corner-top bg-white rounded-b-md max-h-32'>
              <div className='col-span-1 w-9/12 rounded-md'>
                <p className='text-stone-600 text-center font-bold'>
                  Código do ticket
                </p>
                <p className='text-center text-xl font-bold'>
                  {ticket.ticket.codigoTicket}
                </p>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

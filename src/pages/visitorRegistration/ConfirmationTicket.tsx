import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTicket } from '../../api/api';
import { TicketDataType } from '../../types/visitor-registration';
import { IoLogoWhatsapp } from 'react-icons/io5';

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
    <main className=' w-full bg-slate-200 p-4 flex flex-col gap-2'>
      <section className='flex flex-col bg-white rounded-md px-4 py-5'>
        <div className=' items-center flex justify-between py-2'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
            alt=''
            className='size-8 -rotate-90'
          />
          <span className='font-medium text-sm min-[380px]:text-lg'>
            Tudo certo com o ticket!!
          </span>
          <img
            src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
            alt=''
            className='size-8 -rotate-90'
          />
        </div>

        <div className='px-1 flex flex-col text-sm gap-1.5 mt-2'>
          <h1 className='font-bold  min-[380px]:text-lg'>
            Quais são os próximos passos?
          </h1>

          <p>
            Confira as informações que você recebeu no whatsapp, lá você vai
            encontrar:
          </p>
          <ul className=' text-[13px] px-6 list-disc font-medium'>
            <li>cardápio do dia</li>
            <li>informações de segurança</li>
            <li>ticket para acessar o evento</li>
          </ul>

          <div className=' mt-8 flex flex-col gap-2'>
            <p>
              Caso você não tenha recebido nenhuma mensagem, entre em contato
              conosco!
            </p>
            <p className=' text-green-700 font-medium flex text-sm items-center gap-1'>
              <span>
                <IoLogoWhatsapp size={16} />
              </span>
              99189-5043 ou 99189-3469
            </p>
            <p className='font-semibold text-zinc-700 mt-5'>
              *Tire um print ou anote o código
            </p>
          </div>
        </div>
      </section>

      <div className=' h-full flex flex-col'>
        <section className=' pt-8 bg-white rounded-t-md px-4 relative'>
          <h1 className='font-bold min-[380px]:text-lg'>
            2ª Semana da Família 2024
          </h1>
          <hr className=' mt-5 h-0.5 bg-stone-200' />
        </section>

        {ticket?.ticket && (
          <div className=''>
            <section className=' h-1/2 px-4 pt-4 pb-6 bg-white border-b-4 border-dashed corner-bottom'>
              <div className='grid grid-cols-2 gap-y-4 text-sm min-[380px]:text-base min-[380px]:gap-y-6 pb-6'>
                <div className='col-span-2'>
                  <p className='font-semibold text-stone-700'>Descrição</p>
                  <p className=' text-[13px]'>
                    2ª Semana da família - Pedertractor
                  </p>
                </div>
                <div className='col-span-2'>
                  <p className='font-semibold text-stone-700'>
                    Local do evento
                  </p>
                  <p className=' text-[13px]'>Industria Pedertractor</p>
                </div>
                <div className='col-span-2'>
                  <p className='font-semibold text-stone-700'>
                    Nome do colaborador
                  </p>
                  <p className=' text-[13px]'>{ticket.ticket.nome}</p>
                </div>
                <div className='col-span-1'>
                  <p className='font-semibold text-stone-700'>Data escolhida</p>
                  <p className=' text-[13px]'>{ticket.ticket.data}</p>
                </div>
                <div className='col-span-1'>
                  <p className='font-semibold text-stone-700'>Horário</p>
                  <p className=' text-[13px]'>{ticket.ticket.horario}</p>
                </div>
                <div className='col-span-1'>
                  <p className='font-semibold text-stone-700'>familiares</p>

                  {ticket.ticket.quantidadeFamiliares == 0 ? (
                    <p className=' text-[13px]'> - </p>
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
                  <p className=' text-[13px]'>{ticket.ticket.numeroCartao}</p>
                </div>
              </div>
            </section>

            <section className=' flex items-center justify-center corner-top py-4 bg-white rounded-b-md'>
              <div className=' w-full  flex flex-col items-center justify-center col-span-1 rounded-md'>
                <p className='text-stone-600 text-center font-bold'>
                  Código do ticket
                </p>
                <p className='text-center text-xl font-bold'>
                  {ticket.ticket.codigoTicket.toString().padStart(6, '0')}
                </p>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}

import { useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io5';
export function FrequentlyAsked() {
  useEffect(() => {
    const details = document.querySelectorAll('details');

    details.forEach((targetDetail) => {
      targetDetail.addEventListener('click', () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open');
          }
        });
      });
    });
  }, []);

  return (
    <section className='flex-1 mb-5'>
      <h2 className='font-bold mb-2 min-[380px]:text-lg'>Dúvidas frequentes</h2>

      <div className='divide-y'>
        <details className='py-2 min-[380px]:py-3'>
          <summary className='flex justify-between items-center text-sm min-[380px]:text-base font-medium'>
            Qual a programação? <FaAngleDown />
          </summary>
          <div className=' gap-2 flex flex-col text-sm min-[380px]:text-base mt-1.5 min-[380px]:mt-2.5 text-stone-600'>
            <p>Durante o dia do evento teremos:</p>
            <ul className=' list-decimal text-[13px] pl-5 mb-2'>
              <li>coffe break</li>
              <li>sorteio de brindes</li>
              <li>apresentação inicial</li>
              <li>orientações de segurança</li>
              <li>percurso dentro da empresa</li>
              <li>entrega de presentes</li>
            </ul>
          </div>
        </details>
        <details className='py-2 min-[380px]:py-3'>
          <summary className='flex justify-between items-center text-sm min-[380px]:text-base font-medium'>
            Quem pode participar <FaAngleDown />
          </summary>
          <div className=' gap-2 flex flex-col text-sm min-[380px]:text-base mt-1.5 min-[380px]:mt-2.5 text-stone-600'>
            <p>
              É importante resaltar que só membros da familia do colaborador
              podem participar, são eles:
            </p>
            <ul className=' list-disc text-[13px] pl-5 mb-2'>
              <li>filhos</li>
              <li>namorado(a)</li>
              <li>esposa e marido</li>
              <li>pai e mãe (caso morar junto)</li>
            </ul>
          </div>
        </details>
        <details className='py-2 min-[380px]:py-3'>
          <summary className='flex justify-between items-center text-sm min-[380px]:text-base font-medium'>
            Quantas pessoas eu posso levar? <FaAngleDown />
          </summary>
          <p className='text-sm min-[380px]:text-base mt-1.5 min-[380px]:mt-2.5 text-stone-600'>
            Não existe um limite, porém é importante seguir as orientações de
            quem pode participar do evento.
          </p>
        </details>
        <details className='py-2 min-[380px]:py-3'>
          <summary className='flex justify-between items-center text-sm min-[380px]:text-base font-medium'>
            E se eu tiver uma outra dúvida? <FaAngleDown />
          </summary>
          <p className=' flex flex-col gap-2 text-sm min-[380px]:text-base mt-1.5 min-[380px]:mt-2.5 text-stone-600'>
            Caso você tiver outra duvida, entre em contato através dos numeros:
            <span className='flex items-center gap-1'>
              <IoLogoWhatsapp size={18} />
              (14)99189-3469
            </span>
            <span className='flex items-center gap-1'>
              <IoLogoWhatsapp size={18} />
              (14)99189-5043
            </span>
          </p>
        </details>
      </div>
    </section>
  );
}

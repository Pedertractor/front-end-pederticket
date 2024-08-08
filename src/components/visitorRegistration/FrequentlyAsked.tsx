import { useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

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
        <details className='py-1.5 min-[380px]:py-3'>
          <summary className='flex justify-between items-center text-sm min-[380px]:text-base font-medium'>
            Qual a programação? <FaAngleDown />
          </summary>
          <p className='text-sm min-[380px]:text-base mt-1.5 min-[380px]:mt-2.5 text-stone-600'>
            Durante os dias...
          </p>
        </details>
        <details className='py-1.5 min-[380px]:py-3'>
          <summary className='flex justify-between items-center text-sm min-[380px]:text-base font-medium'>
            Quem pode participar <FaAngleDown />
          </summary>
          <p className='text-sm min-[380px]:text-base mt-1.5 min-[380px]:mt-2.5 text-stone-600'>
            Podem participar os familiares dos colabores...
          </p>
        </details>
        <details className='py-1.5 min-[380px]:py-3'>
          <summary className='flex justify-between items-center text-sm min-[380px]:text-base font-medium'>
            Quantas pessoas eu posso levar? <FaAngleDown />
          </summary>
          <p className='text-sm min-[380px]:text-base mt-1.5 min-[380px]:mt-2.5 text-stone-600'>
            Cada colaborador pode levar até três pessoas...
          </p>
        </details>
        <details className='py-1.5 min-[380px]:py-3'>
          <summary className='flex justify-between items-center text-sm min-[380px]:text-base font-medium'>
            E se eu tiver uma outra dúvida? <FaAngleDown />
          </summary>
          <p className='text-sm min-[380px]:text-base mt-1.5 min-[380px]:mt-2.5 text-stone-600'>
            Em caso de outra dúvida você pode perguntar...
          </p>
        </details>
      </div>
    </section>
  );
}

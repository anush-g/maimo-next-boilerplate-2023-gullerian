import Image from 'next/image';
import ButtonLink from './ButtonLink';
import Link from 'next/link';

const ShowCard = ({ actualShow }) => {
  const { show } = actualShow;
  const { name, id, image, premiered, summary, webChannel } = show;
  const summaryBien = summary?.replace(/<\/?p>|<\/?b>/g, '');

  return (
    <Link className='w-96' href={`/show/${id}`}>
      <div className='p-4 '>
        <div className='h-full border-2 border-rose-200 border-opacity-60 rounded-lg overflow-hidden'>
          <Image className='lg:h-96 md:h-96 w-full object-cover object-center' width={680} height={1000} alt={name} src={image?.original} />
          <div className='p-6 bg-rose-100'>
            <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>{premiered?.substring(0, 4)|| '-'}</h2>
            <h1 className='title-font text-lg font-bold text-rose-500 mb-3'>{name}</h1>
            <p className='leading-relaxed mb-3'>{summaryBien?.substring(0, 130) + '...'|| '-'}</p>
            <div className='flex items-center flex-wrap '>
              <a className='text-rose-800 inline-flex items-center md:mb-2 lg:mb-0'>Ver más
                <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </a>

              <span className='text-gray-400  lg:ml-auto md:ml-0 ml-auto inline-flex items-center leading-none text-sm'>
              <svg className='w-4 h-4 mr-1' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'>
                  <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                  <circle cx='12' cy='12' r='3'></circle>
                </svg>{webChannel?.name || '-'}
              </span>
            </div>
          </div>
        </div>
      </div>
      </Link>
  );
};

export default ShowCard;

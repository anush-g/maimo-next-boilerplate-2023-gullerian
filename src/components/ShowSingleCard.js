import Image from 'next/image';

const ShowSingleCard = ({ show }) => {

  const { name, id, image, language, status, rating, genres, premiered, summary, webChannel } = show;
  const parsedSummary = <div dangerouslySetInnerHTML={{ __html: summary }} />;

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-12 mx-auto flex flex-col'>
        <h1 className='text-center pb-8 text-4xl text-pink-500 font-bold'>{name}</h1>
        <div className='lg:w-4/6 mx-auto'>
          <div className='rounded-lg h-96 overflow-hidden'>
            <Image alt={content} className='object-cover object-center h-full w-full' src={image?.original} />
          </div>
          <div className='flex flex-col sm:flex-row mt-10'>
            <div className='sm:w-1/3 text-center '>
              <div className='flex flex-col items-center text-center justify-center'>
                <h1 className='font-medium text-2xl title-font mt-4 text-pink-500'>INFO</h1>
                <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                <ul className='text-base text-left'>
                <li className='pb-2'><bold className='font-bold'>Rating:</bold> {rating?.average || '-'} </li>

                  <li className='pb-2'><bold className='font-bold'>Premiere Date:</bold> {premiered || '-'} </li>
                  <li className='pb-2'><bold className='font-bold'>Language:</bold> {language || '-'} </li>
                  <li className='pb-2'><bold className='font-bold'>Status:</bold> {status || '-'} </li>
                  <li className='pb-2'><bold className='font-bold'>Channel:</bold> {webChannel?.name || '-'} </li>
                  <li className='pb-2'><bold className='font-bold'>Genre:</bold> {genres ? genres?.join(', ') : '-'} </li>



                </ul>

              </div>
            </div>
            <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
              <p className='leading-relaxed text-lg mb-4' dangerouslySetInnerHTML={{ __html: summary }}></p>
              <a className='text-indigo-500 inline-flex items-center'>Ir al siguiente
                <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 ml-2' viewBox='0 0 24 24'>
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowSingleCard;

import Image from 'next/image';
import { useAppContext } from '@/contexts/AppContext';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <header className='text-white body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex title-font font-medium items-center mb-4 md:mb-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>Tailblocks</span>
        </a>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-slate-300'>
          <a className='mr-5 hover:text-white hover:font-semibold'>Home</a>
          <a className='mr-5 hover:text-white hover:font-semibold'>Discover</a>
          <a className='mr-5 hover:text-white hover:font-semibold'>Movie Release</a>
          <a className='mr-5 hover:text-white hover:font-semibold'>Forum</a>
          <a className='mr-5 hover:text-white hover:font-semibold'>About</a>
        </nav>

        
        <div className='mx-2 flex'>
          <a><svg className='svg-icon search-icon' aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7" ><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
          </a>
        </div>
        
        <button className=' mx-2 inline-flex items-center px-5 py-2 border-slate-400 border-2 rounded-xl hover:border-purple-500 hover:text-purple-500 text-base'>
          Sign up
        </button>
        <button className='mx-2 inline-flex items-center px-5 py-2 border-green-600 bg-green-600 border-2 rounded-xl hover:border-purple-500 hover:text-purple-500 text-base'>
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;

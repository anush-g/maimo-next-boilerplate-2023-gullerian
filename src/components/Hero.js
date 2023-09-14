import Image from 'next/image';

const Hero = () => {
  return (
  <section 
    className={'text-white body-font hero-container'}
    style={{
      backgroundImage: "url('/assets/bg4.jpg')", // Ruta a tu imagen de fondo
      backgroundSize: 'cover', // Ajustar la imagen al tamaño del contenedor
      backgroundPosition: 'center', // Centrar la imagen
    }}
  >
    <div className={'container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'}>
      <div className={'lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'}>
        <h1 className={'title-font sm:text-6xl text-3xl mb-4 font-bold text-white'}>Barbie Animated Movies
        </h1>
        <p className={'mb-8 leading-relaxed'}>Welcome to Barbie Magical Movie World, where dreams come to life on the silver screen. Join Barbie and her friends in a mesmerizing journey through a realm of endless adventures, laughter, and enchantment. Explore a collection of timeless animated classics that will transport you to far-off lands, sparkling castles, and heartwarming tales.</p>
        <div className={'flex justify-center'}>
          <button className={'inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'}>Random movie</button>
          <button className={'ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'}>Search my Barbie movie</button>
        </div>
      </div>
      <div className={'lg:max-w-lg lg:w-full md:w-1/2 w-5/6'}>
        {/* <Image className={'object-cover object-center rounded'} alt={`hero`} width={400} height={200} src={`/assets/barbie-hero.jpg`} /> */}
      </div>
    </div>
  </section>
  );
};

export default Hero;

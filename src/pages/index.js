import Navbar from '@/components/Navbar';
import HomeContainer from '@/containers/HomeContainer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar className="fixed"/>
      <HomeContainer />
      <Footer />
    </>
  );
}

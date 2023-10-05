import SingleCardContainer from '@/containers/SingleCardContainer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

const Show = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <SingleCardContainer id={id} />
      <Footer />
    </>
  );
};

export default Show;


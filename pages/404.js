import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/ui/Layout';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);
  return (
    <Layout>
      <div className='text-tertiary py-40 flex justify-center items-center flex-col'>
        <h1 className='text-7xl'>Ooooops...</h1>
        <h2 className='text-2xl my-6'>That page can not be found.</h2>
        <p className='text-lg'>
          Go back to the{' '}
          <Link href='/'>
            <a className='underline text-blue-800 hover:text-green-700'>
              HomePage
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;

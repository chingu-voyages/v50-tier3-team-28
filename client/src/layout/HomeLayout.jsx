import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/UI/Header';
import { Footer } from '../components/UI/Footer';
import Graph from '../components/Graph';

export const HomeLayout = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [action, setAction] = useState('Sign Up');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const onClickHandler = () => {
    if (!isAuthenticated) {
      loginWithRedirect({});
    } else {
      logout({ returnTo: window.location.origin });
    }
  };

  useEffect(() => {
    setAction(isAuthenticated ? 'Log Out' : 'Sign Up');
  }, [isAuthenticated]);

  return (
    <section className='grid grid-cols-12 grid-rows-auto gap-2 h-screen'>
      <Header action={action} onClickHandler={onClickHandler} />

      <main className='flex flex-col justify-between col-span-12 row-span-6'>
        <section className='col-span-12 h-1/2'>
          <Graph />
        </section>
        <section className='bg-gray-200 col-span-12 h-1/2'>
          <h2>Map</h2>
        </section>
        <section className='col-span-12 h-1/2'>
          <h2>Solutions</h2>
        </section>
      </main>

      <Footer />
    </section>
  );
};
export default HomeLayout;

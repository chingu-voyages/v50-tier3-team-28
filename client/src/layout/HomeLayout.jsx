import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/UI/Header';
import { Button } from '../components/UI/Button';
import beeImage from '../assets/imgs/bee.png';
import hiveImage from '../assets/imgs/hive.png';

import Footer from '../components/Footer/Footer';
import Graph from '../components/Graph';
import Map from "../components/Map";
import AnimatedNumber from './AnimatedNumber';
import { DarkLightModeButton } from '../components/UI/DarkLightModeButton';
// import { Counter } from '../features/counter/Counter';

const HomeLayout = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [action, setAction] = useState('Sign Up');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  const [statHighlights] = useState({
    countries: 12,
    hivesSaved: 16000,
    volunteers: 300,
  });

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
    <section className='grid grid-cols-12 grid-rows-auto h-screen'>
      <Header action={action} onClickHandler={onClickHandler} />

      <main className='flex flex-col justify-around col-span-12 row-span-6 dark:bg-black dark:text-white'>
        <section className='bg-[#9BC25B] grid grid-cols-3 gap-1 md:grid-cols-6 font-body space-x-4 md:space-y-20'>
          <img
            src={beeImage}
            alt=''
            className='w-[190px] h-[185px] border-2 border-[#D9D9D9] rounded-full'
          />
          <h2 className='my-auto'>
            Its Time to Save The Bees To Save Our Future Generations
          </h2>
          <Button
            className='w-[134px] h-[54px] font-normal text-white bg-[#F4743B] rounded-lg my-auto'
            type='button'
            text='Learn More'
          />
          <div className='my-10'>
            <div className='flex flex-row'>
              <span className='font-bold'>
                <AnimatedNumber className='' n={statHighlights.countries} />
              </span>
              <div className='font-bold'>+</div>
            </div>
            <p>Countries</p>
          </div>
          <div className='my-10'>
            <div className='flex flex-row'>
              <span className='font-bold'>
                <AnimatedNumber className='' n={statHighlights.hivesSaved} />
              </span>
              <div className='font-bold'>+</div>
            </div>
            <p>Beehives Saved</p>
          </div>
          <div className='my-10'>
            <div className='flex flex-row'>
              <span className='font-bold'>
                <AnimatedNumber className='' n={statHighlights.volunteers} />
              </span>
              <div className='font-bold'>+</div>
            </div>
            <p>Volunteers</p>
          </div>
        </section>

        <section className='col-span-12 h-1/2 '>
          <Graph />
        </section>
        <section className="col-span-12 h-1/2 bg-gray-200">
          <Map />
        </section>

        <section className='col-span-12 h-1/2'>
          <h2>Solutions</h2>
        </section>

        <section className='col-span-12 h-1/2'>
          <DarkLightModeButton />
        </section>

        {/* This below section is an example for redux-toolkit. This will be removed before our project submission */}
        {/* <section className='col-span-12 h-1/2 self-center'>
          <h2 className='mb-6'>Counter Example using Redux-Toolkit</h2>
          <Counter />
        </section> */}
      </main>

      <Footer />
    </section>
  );
};

export default HomeLayout;

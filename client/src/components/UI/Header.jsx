import PropTypes from 'prop-types';
import { useState } from 'react';
import { AnchorLink } from '../UI/AnchorLink';
import { Nav } from '../UI/Nav';
import MainHeroLanding from '../UI/MainHeroLanding';
import navBeeLogo from '../../assets/imgs/nav_bee_logo.png';

export const Header = ({ action, onClickHandler }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='col-span-12 bg-[#9BC25B]'>
      <section className='flex items-center justify-between mx-auto px-4 py-2 md:px-10'>
        <AnchorLink
          href='#'
          className='flex items-center justify-center text-white text-2xl font-bold'>
          <img
            src={navBeeLogo}
            alt='Bee Logo'
            className='h-36 md:h-48 md:ml-4'
          />
        </AnchorLink>

        <div className='md:hidden'>
          <button
            onClick={handleMenuToggle}
            className='text-white focus:outline-none'>
            <i
              className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'
                } fa-2x`}></i>
          </button>
        </div>

        <div className={`hidden md:flex md:items-center`}>
          <Nav action={action} onClickHandler={onClickHandler} />
        </div>
      </section>

      {isMenuOpen && (
        <div className='md:hidden'>
          <Nav action={action} onClickHandler={onClickHandler} />
        </div>
      )}

      <MainHeroLanding />
      <MainHeroLandingSurvey />
    </header>
  );
};

Header.propTypes = {
  action: PropTypes.string,
  onClickHandler: PropTypes.func,
};

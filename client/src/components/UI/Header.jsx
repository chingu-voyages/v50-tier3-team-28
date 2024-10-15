import PropTypes from 'prop-types';
// import { AnchorLink } from '../UI/AnchorLink';
import { Link } from 'react-router-dom';
import { Nav } from '../UI/Nav';
import navBeeLogo from '../../assets/imgs/nav_bee_logo.png';
import React from 'react';
// // import { Link } from 'react-router-dom';
// import navBeeLogo from '../../assets/imgs/nav_bee_logo.png';

export const Header = ({ action, onClickHandler, isAuthenticated }) => {
  return (
    <header>
      <section className='flex items-start justify-between mx-auto'>
        <div className='logo'>
          <Link to={isAuthenticated ? '/dashboard' : '/'}>
            <img src={navBeeLogo} alt='Bee Logo' className='h-[10rem]' />
          </Link>
        </div>
        <Nav action={action} onClickHandler={onClickHandler} />
      </section>
    </header>
  );
};

Header.propTypes = {
  action: PropTypes.string,
  onClickHandler: PropTypes.func,
};

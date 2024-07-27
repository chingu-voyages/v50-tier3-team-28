import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AnchorLink } from '../UI/AnchorLink';
import { Button } from '../UI/Button';

export const Nav = ({ action, onClickHandler }) => {
  return (
    <nav>
      <ul className='font-medium flex flex-col space-y-6 p-4 md:flex-row md:space-x-8 md:space-y-0 md:p-0 mt-4 md:mt-0'>
        <li className='text-center border-b footerBoxColor md:border-none'>
          <AnchorLink
            href='#'
            className='underline text-[#F4743B] p-2.5'
            text='Home'
          />
        </li>
        <li className='text-center border-b footerBoxColor md:border-none'>
          <a href='#footer' className='text-black p-2.5'>
            About Us
          </a>
        </li>
        <li className='text-center border-b footerBoxColor md:border-none'>
          <AnchorLink href='#' className='text-black p-2.5' text='Stats' />
        </li>
        <li className='text-center border-b footerBoxColor md:border-none'>
          <Link to='/solutions' className='text-black p-2.5'>
            Solutions
          </Link>
        </li>
        <li className='text-center md:border-none'>
          <AnchorLink
            href='#'
            className='font-normal text-white bg-[#F4743B] rounded-lg p-2.5'
            text='Contact'
          />
        </li>
        <li className='text-center md:border-none'>
          <Button
            className='font-normal text-white bg-green-500 hover:bg-green-300 rounded-lg p-2.5 -mt-4'
            type='button'
            text={action}
            onClick={onClickHandler}
          />
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  action: PropTypes.string,
  onClickHandler: PropTypes.func,
};

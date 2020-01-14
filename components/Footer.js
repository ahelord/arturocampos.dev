import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        <small>
          &copy; {new Date().getFullYear()} | Arturo Campos | Made with{' '}
          <span aria-label='Love' className='align-middle' role='img'>
            ❤️
          </span>{' '}
          and{' '}
          <span aria-label='Coffee' className='align-middle' role='img'>
            ☕️
          </span>
        </small>
      </p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Link from 'next/link';
import ACLogo from '../components/ACLogo';

const Header = () => (
  <header>
    <h1>
      <Link href='/'>
        <a>
          <span>
            <ACLogo />
          </span>
          Arturo Campos
        </a>
      </Link>
    </h1>
    <h2>Web Development</h2>
  </header>
);

export default Header;

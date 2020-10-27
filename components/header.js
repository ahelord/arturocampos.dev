import Link from 'next/link';
import Logo from '../components/logo';

const Header = () => (
  <header>
    <h1>
      <Link href='/'>
        <a>
          <span>
            <Logo />
          </span>
          Arturo Campos
        </a>
      </Link>
    </h1>
    <h2>Web Development</h2>
  </header>
);

export default Header;

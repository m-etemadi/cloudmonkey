import { Element } from 'react-scroll';
import Navbar from './Navbar/Navbar';

function Header() {
  return (
    <header>
      <Element className="home">
        <Navbar />
      </Element>
    </header>
  );
}

export default Header;

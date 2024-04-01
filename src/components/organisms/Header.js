import Logo from '../atoms/Logo';
import Navbar from './Navbar';

export const Header = () => (
  <header className="flex justify-center shadowHeader py-4 sm:py-6">
    <div className="container flexCenter flex-col">
      <Logo className="h-12 sm:h-24" />
      <Navbar />
    </div>
  </header>
);

export default Header
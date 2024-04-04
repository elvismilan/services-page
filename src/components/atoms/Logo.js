import logo from '../../assets/logo.svg';

const Logo = ({className}) => (
  <a href='/' className='flex justify-center'>
    <img src={logo} className={className} alt="Te Ayudo" />
  </a>
)

export default Logo
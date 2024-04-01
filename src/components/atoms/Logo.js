import logo from '../../assets/logo.svg';

const Logo = ({className}) => (
  <div className='flex justify-center'>
    <img src={logo} className={className} alt="Te Ayudo" />
  </div>
)

export default Logo
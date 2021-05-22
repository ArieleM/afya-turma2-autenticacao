import LogoAfya from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';


// import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <nav>
      <img src={LogoAfya} alt="Logo Afya" />

      <Link to="/">Home</Link>
      <Link to="/criar-conta">Inscreva-se</Link>
      <Link to="/login">Logar</Link>
    </nav>
  );
}

export default NavBar;
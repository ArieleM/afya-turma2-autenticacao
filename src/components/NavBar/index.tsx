import LogoAfya from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';


import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <img src={LogoAfya} alt="Logo Afya" />
      <div className="links-content">
        <Link to="/">Home</Link>
        <Link to="/criar-conta">Inscreva-se</Link>
        <Link to="/login">Logar</Link>
      </div>

    </Container>
  );
}

export default NavBar;
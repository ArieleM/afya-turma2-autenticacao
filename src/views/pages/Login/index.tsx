import Footer from '../../../components/Footer';
import FormSignIn from '../../../components/FormSignIn';
import NavBar from '../../../components/NavBar';

import { SectionComponent } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <SectionComponent>
          <h1>Login</h1>
          <FormSignIn />
        </SectionComponent>
      </div>
      <Footer />
    </>
  );
}

export default Login;


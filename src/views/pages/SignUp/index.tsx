
import Footer from '../../../components/Footer';
import FormSignUp from '../../../components/FormSignUp';
import NavBar from '../../../components/NavBar';

import { SectionComponent } from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <SectionComponent>
          <h1>Inscreva-se</h1>
          <FormSignUp />
        </SectionComponent>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
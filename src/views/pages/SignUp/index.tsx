import Footer from '../../../components/Footer';
import NavBar from '../../../components/NavBar';

import { SectionComponent } from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <SectionComponent>
          <h1>Inscreva-se</h1>
        </SectionComponent>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
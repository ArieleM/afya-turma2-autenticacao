// import { Container } from './styles';
import { FormEvent, useCallback , useState} from "react";
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';
import api from '../../service/api';

import animationSignIn from '../../assets/animation/60347-loader.json'

interface IUserLogin{
  usuario:string;
  senha:string;
}


const FormSignIn: React.FC = () => {
  const history = useHistory();

  const [formDataContent, setFormDataContent] = useState<IUserLogin> ({} as IUserLogin)
  const [isLoad, setIsLoad] = useState<boolean> (false);


  
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoad(true);

      api.post('/login', formDataContent)
      .then(
        response => {
          localStorage.setItem('@tokenAfyaApp', response.data.token)
          toast.success('Cadastro realizado com sucesso', {
            onClose: () => history.push('/dash')
          })
        })
      .catch(e => toast.error('Algo deu errado'))
      .finally(() => setIsLoad(false))
    },
    [formDataContent, history],
  )

  const animationContent = {
    loop: true,
    autoplay: true,
    animationData: animationSignIn
  }

  return (
    <div>
      { isLoad ? (
        <Lottie 
          options={animationContent}
          width={200}
          height={400}
        />
      ) : (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Insira seu nome de usuário"
          onChange={ e => setFormDataContent({...formDataContent, usuario:e.target.value})}
        />
        <input
          type="password"
          name="password"
          placeholder="Insira sua senha"
          onChange={ e => setFormDataContent({...formDataContent, senha:e.target.value})}
        />
        <input type="submit" value="Logar"  />
      </form>
      )}
    </div>
  );
}

export default FormSignIn;
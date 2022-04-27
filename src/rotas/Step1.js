import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StepContext } from './../contextAPI/StepContext';

import Header from '../components/header/Header';
import Progress from '../components/progress/Progress';

export default () => {

  const navigate = useNavigate();
  const { setStep, setUser } = useContext(StepContext);

  const handleNextStep = () => {
    let nome = document.querySelector("#name"),
        primeiroNome = nome.value.split(" ")[0];

    if(nome.value.length !== 0){
      setUser({
        name: nome.value,
        firstName: primeiroNome
      });
    }
    setStep(1);
    navigate("/step2");
  }

  return(
    <div className="step-container">
      <Header/>
      <div className="box-flex">
        <Progress/>
        <div className="step step1">
          <div className="form form-step1">
            <p>Passo 1/3</p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha o campo abaixo com seu nome completo</p>
            <hr></hr>
            <div className="input-box">
              <label htmlFor="name">Nome completo</label>
              <input type="text" id="name" placeholder="Informe seu nome" autoComplete="off"/>
            </div>
            <button onClick={handleNextStep}>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
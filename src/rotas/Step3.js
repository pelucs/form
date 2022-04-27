import './Step3.css';
import { useContext, useEffect } from 'react';
import { StepContext } from './../contextAPI/StepContext';
import { useNavigate } from 'react-router-dom';

import Header from '../components/header/Header';
import Progress from '../components/progress/Progress';

export default () => {

  const navigate = useNavigate();
  const { skill, setStep, user } = useContext(StepContext);

  useEffect(() => {
    if(user === null){
      window.navigator.vibrate(200);
      setStep(0);
      navigate("/");
    } else if(skill === null){
      window.navigator.vibrate(200);
      setStep(1);
      navigate("/step2");
    }
  }, []);

  const handleBackStep = () => {
    setStep(1);
    navigate("/step2");
  }

  const saveForm = () => {
    let email = document.querySelector("#email"),
        git = document.querySelector("#git");

    if(email.value.length !== 0 && git.value.length !== 0){
      alert("Seus dados foram salvos");
      window.location.href = "/";
    } else{
      window.navigator.vibrate(200);
      alert("Preencha todos os campos");
    }
  }

  return(
    <div className="step-container">
      <Header/>
      <div className="box-flex">
        <Progress/>
        <div className="step step3">
          <div className="form form-step3">
            <p>Passo 3/3</p>
            {
              user &&
                <h1>Legal {user.firstName}, onde te achamos?</h1>
            }
            <p>Preencha todos os campos para podermos entrar em contato com você</p>
            <hr></hr>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Informe seu email"/>
              <label htmlFor="git">Github</label>
              <input type="text" id="git" placeholder="Informe seu Github"/>
            </div>
            <div className="buttons-box">
              <button onClick={handleBackStep}>Voltar</button>
              <button onClick={saveForm}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
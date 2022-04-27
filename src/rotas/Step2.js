import './Step2.css';
import { useContext, useEffect } from 'react';
import { StepContext } from './../contextAPI/StepContext';
import { useNavigate } from 'react-router-dom';

import Header from '../components/header/Header';
import Progress from '../components/progress/Progress';

export default () => {

  const navigate = useNavigate();
  const { skill, setSkill, setStep, user } = useContext(StepContext);

  useEffect(() => {
    if(user === null){
      window.navigator.vibrate(200);
      setStep(0);
      navigate("/");
    }
  }, []);

  const handleOption = i => {
    setSkill(i);
    let primary = document.querySelector("#primary"),
        secundary = document.querySelector("#secundary")

    if(i === 0){
      primary.setAttribute("trigger", "loop");
      secundary.removeAttribute("trigger");
    } else if(i === 1){
      secundary.setAttribute("trigger", "loop");
      primary.removeAttribute("trigger");
    }
  }

  const handleNextStep = () => {
    navigate("/step3");
    setStep(2);
  }

  const handleBackStep = () => {
    navigate("/");
    setStep(0);
  }

  return(
    <div className="step-container">
      <Header/>
      <div className="box-flex">
        <Progress/>
        <div className="step step2">
          <div className="form form-step2">
            <p>Passo 2/3</p>
            {
              user &&
                <h1>{user.firstName}, o que melhor descreve você?</h1>
            }
            <p>Selecione a melhor opção que condiz com seu nível de conhecimento</p>
            <hr></hr>
            <div className="select-box">
              <div 
                className="option"
                style={{ border: skill === 0 ? "2px solid var(--primaria)" : "2px solid transparent",
                padding: skill === 0 ? "0 20px" : "0" }}
                onClick={() => handleOption(0)}
              >
                <span>
                  <lord-icon
                    id="primary"
                    src="https://cdn.lordicon.com/lupuorrc.json"
                    colors="primary:#673ab7,secondary:#08a88a"
                    style={{ width: "50px", height: "50px" }}
                  />
                </span>
                <div className="info-option">
                  <h1>Sou iniciante</h1>
                  <p>Comecei a programar há menos de 2 anos</p>
                </div>
              </div>
              <div 
                className="option"
                style={{ border: skill === 1 ? "2px solid var(--primaria)" : "2px solid transparent",
                padding: skill === 1 ? "0 20px" : "0" }}
                onClick={() => handleOption(1)}
              >
                <span>
                  <lord-icon
                    id="secundary"
                    src="https://cdn.lordicon.com/nobciafz.json"
                    colors="primary:#673ab7,secondary:#673ab7"
                    style={{ width: "50px", height: "50px" }}
                  />
                </span>
                <div className="info-option">
                  <h1>Sou experiente</h1>
                  <p>Já programo há 2 anos ou mais</p>
                </div>
              </div>
            </div>
            <div className="buttons-box">
              <button onClick={handleBackStep}>Voltar</button>
              <button onClick={handleNextStep}>Próximo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
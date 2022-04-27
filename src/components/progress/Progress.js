import './Progress.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StepContext } from './../../contextAPI/StepContext';

export default () => {

  const { step, setStep } = useContext(StepContext);

  const handleStep = i => {
    setStep(i);
  }

  return(
    <ul className="progress">
      <li className="box-step" onClick={() => handleStep(0)}>
        <Link to="/">
          <div className="info-step">
            <h1>Pessoal</h1>
            <p>Identifique-se</p>
          </div>
          <ion-icon 
            name="person"
            style={{ backgroundColor: step === 0 ? "var(--primaria)" : "transparent" }}
          ></ion-icon>
          <div 
            className="step-circle"
            style={{ backgroundColor: step === 0 ? "var(--primaria)" : "var(--bck)" }}
          ></div>
        </Link>
      </li>
      <li className="box-step" onClick={() => handleStep(1)}>
        <Link to="/step2">
          <div className="info-step">
            <h1>Profissional</h1>
            <p>Seu nível</p>
          </div>
          <ion-icon 
            name="code-slash"
            style={{ backgroundColor: step === 1 ? "var(--primaria)" : "transparent" }}
          ></ion-icon>
          <div 
            className="step-circle"
            style={{ backgroundColor: step === 1 ? "var(--primaria)" : "var(--bck)" }}
          ></div>
        </Link>
      </li>
      <li className="box-step" onClick={() => handleStep(2)}>
        <Link to="/step3">
          <div className="info-step">
            <h1>Contatos</h1>
            <p>Como te achar</p>
          </div>
          <ion-icon 
            name="share-social"
            style={{ backgroundColor: step === 2 ? "var(--primaria)" : "transparent" }}
          ></ion-icon>
          <div 
            className="step-circle"
            style={{ backgroundColor: step === 2 ? "var(--primaria)" : "var(--bck)" }}
          ></div>
        </Link>
      </li>
    </ul>
  );
}
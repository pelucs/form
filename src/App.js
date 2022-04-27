import './App.css';
import Rotas from './Rotas';

export default () => {

  const closeAviso = () => {
    document.querySelector(".aviso").style.display = "none";
  }

  return(
    <div>
      <Rotas/>
      <div className="aviso">
        <p>Esta aplicação não irá salvar seus dados, é apenas para demostração!</p>
        <span onClick={closeAviso}><ion-icon name="close-circle-outline"></ion-icon></span>
      </div>
    </div>
  );
}
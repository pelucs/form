import { Routes, Route, Navigate } from 'react-router-dom';

import Step1 from './rotas/Step1';
import Step2 from './rotas/Step2';
import Step3 from './rotas/Step3';

export default () => {
  return(
    <Routes>
      <Route path="/" element={<Step1/>}/>
      <Route path="/step2" element={<Step2/>}/>
      <Route path="/step3" element={<Step3/>}/>
    </Routes>
  );
}
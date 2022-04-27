import { createContext, useState } from "react";

export const StepContext = createContext();

export const StepContextProvider = props => {

  const [step, setStep] = useState(0);
  const [skill, setSkill] = useState(null);
  const [user, setUser] = useState(null);

  return(
    <StepContext.Provider value={{ step, setStep, skill, setSkill, user, setUser }}>
      {props.children}
    </StepContext.Provider>
  );
}
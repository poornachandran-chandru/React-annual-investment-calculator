import React from "react";
import Header from "./Header";
import UserInput from "./UserInput";
import Results from "./Results";
import { useState } from "react";
function App(){

   
    const [userInput, setUserInput] = useState({
        initialInvestment:10000,
        annualInvestment: 15000,
        expectedReturn: 7,
        duration: 5,
      });
      const inputISValid = userInput.duration>=1;
    function handleInputChange(inputIdentifier,newValue){
        setUserInput((prevUserInput) => {
            return {
              ...prevUserInput,
              [inputIdentifier]: +newValue,
            };
          });
    }
    return<>
    <div className="container">
    <Header/>
    <UserInput userInput={userInput} onChange={handleInputChange}/>
    {!inputISValid && <p className="ceneter">please enter the duration greater than zero</p>}
      {inputISValid && <Results input={userInput}/>}
    </div>
    
    </>;
};
export default App;
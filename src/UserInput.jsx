
import { useState } from "react";

export default function UserInput({userInput,onChange}){
    
    return <>
    <section className="user-input">
        <li>
            <label>Intial Investment</label>
            <input type="number" 
            required
            value={userInput.initialInvestment}
            onChange={(event)=> onChange('initialInvestment',event.target.value)}
            />
        </li>
        <li>
            <label>Annual Investment</label>
            <input type="number" 
            
            value={userInput.annualInvestment}
            onChange={(event)=> onChange('annualInvestment',event.target.value)}/>
        </li>
        <li>
            <label>Expected Return</label>
            <input type="number" 
            
            value={userInput.expectedReturn}
            onChange={(event)=> onChange('expectedReturn',event.target.value)}/>
        </li>
        <li>
            <label>Duration</label>
            <input type="number" 
            
            value={userInput.duration}
            onChange={(event)=> onChange('duration',event.target.value)}/>
        </li>
    </section>
    </>;
}
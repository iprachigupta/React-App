import {useState} from "react";

export const Counter =()=>{
    const [count , setCount] = useState(0);
    const [step , setStep] = useState(0);

    const handleIncrease = ()=>{
        setCount(()=> count+step)
    };
    const handleDecrease = ()=>{
        setCount(()=> count-step)
    };
    const handleStep=(value)=>{
        setStep(Number(value));
    };
    const handleReset=()=>{
        setCount(0);
        setStep(0);
    };
    return (
        <>
        <div className="bg-slate-300 m-28 flex flex-col  p-10">
            <div className="flex flex-row justify-evenly">
                <h1 className="mb-7 ml-5">Count : {count}</h1>
                <div className="flex flex-row justify-start">
                    <h1 className="mb-7 ml-5" >Step : </h1>
                   <span><input className="bg-slate-300 focus:outline-none focus:border-none ml-2" type="text" value={step} onChange={(event)=>handleStep(event.target.value)}></input></span>
                </div>
            </div>
            <button onClick={handleIncrease}>Counter Increment</button>
            <button onClick={handleDecrease} disabled={count<=0}>Counter Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </>
        
    )
}
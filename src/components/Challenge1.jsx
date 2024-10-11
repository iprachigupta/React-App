//A counter that increments when a button is clicked.
//An input field where users can type the content
//Document title will update to show the current count
//log the changes in the text in the console.
//use useStates and useEffect hooks

import { useState, useEffect} from "react";

const Challenge1 = () =>{
    const [count, setCount] = useState(0);
    const [content, setContent] = useState("");

    const handleOnChange = (event) =>{
        setContent(event.target.value);
        // console.log(content);.........iski jagah useEffect se krke kr skte h .... next lines mein dekho pta chlega 
    }

    useEffect(()=>{
        document.title=(`Count : ${count}`);
    },[count]);

    useEffect(()=>{
        console.log(content);
        // document.title(`Count : ${count}`);
    },[content]);//iss array mein jojo hota h woh jab jab change hota h tab tab re-render hota h..... waise the useEffect sirf ek baar hi render hota h 


    const handleOnClick = ()=>{
        setCount((prev) => prev+1)
    }
    return (
        <div className="flex flex-col w-60 ">
            <h1 className="text-3xl font-bold text-center p-5">Count : {count}</h1>
            <button className="bg-cyan-700 p-5 m-5 text-white text-center" onClick={handleOnClick}>Increase</button>
            <input type="text" className="text-xl border-none ml-5" name="content" placeholder="Enter the content" value={content} onChange={handleOnChange}></input>
        </div>
    );
}

export default Challenge1;
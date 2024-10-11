import { useEffect, useState } from "react";
//Date component already exits for javascript .... so you cannot use Date for it hence use DateComponent
const Date1 = ()=>{
    const [date, setDate] = useState(new Date().toLocaleTimeString());
    console.log(date);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            const updateDate = new Date();
            setDate(updateDate.toLocaleTimeString());
        },1000)
        return ()=>clearInterval(intervalId); //isse harr baar clean up ho ja raha h interval kyuki ag clean up nhikrte h toh woh previous ek stay value le leta h isliye cleanup is necessary
    },[])
    return (
        <div className="relative inset-x-1/2">
            <h1 className="text-2xl font-bold center ">Date : {date}</h1>
        </div>
        
    )
}

export default Date1;
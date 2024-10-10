import { useEffect, useState } from "react";

export const Date = ()=>{
    const [date, setDate] = useState(0);
    console.log(date);
    useEffect(()=>{
        const updateDate = new Date();
        // console.log(updateDate);
        setDate(updateDate.toLocaleTimeString());
    },[])
    return (
        <div>
            <h1 className="text-2xl font-bold">Date : {date}</h1>
        </div>
        
    )
}
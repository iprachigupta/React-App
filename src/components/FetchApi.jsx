import {useEffect, useState} from "react";

const FetchApi = () =>{
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

    // const fetchData = () =>{
    //     fetch(API)
    //     .then((response )=> response.json())
    //     .then((json) => {
    //         console.log(json);
    //         setApiData(json);
    //         setLoading(false);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         setError(error);
    //         setLoading(false);
    //     })
    // }

    const fetchData = async () =>{
        try{
            const res = await fetch(API);
            const data = await res.json();
            console.log(data);
            setApiData(data);
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(loading){
        return <div className="text-center font-bold text-3xl">Loading . . .</div>
    }

    if(error){
        return (
            <div>
                <h2>{error.message}</h2>
            </div>
        )
    }
    

    return (
        <div className="text-2xl font-semibold">
            <ul>Data : 
                <li key={apiData.id}>{apiData.name}</li>
            </ul>
        </div>
    )
}

export default FetchApi;

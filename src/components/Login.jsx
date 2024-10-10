import { useState } from "react";

export const Login = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const loginData = {username, password};
        console.log(loginData);
    }
    
    return (
        <>
        <div className="flex items-center justify-center h-screen">
            <div className="bg-blue-100 shadow-lg shadow-slate-400 rounded-lg border border-gray-300 p-8 w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700" >First Name</label>
                        <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="text" name="username" placeholder="please enter the first name" required value={username} onChange={(e)=>{setUsername(e.target.value)}} autoComplete="off"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" >Password</label>
                        <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="password" name="password" placeholder="please enter your password" required value={password} onChange={(e)=>{setPassword(e.target.value)}} autoComplete="off"/> 
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg shadow-lg shadow-blue-700/60 hover:opacity-90">Create Account</button>
                </form>
                <h4 className="text-xs text-center mt-4">No account?
                    <a href="/signup" className="text-blue-500 hover:underline"> Sign up?...</a>
                </h4>
            </div>
        </div>
        </>
    )
}
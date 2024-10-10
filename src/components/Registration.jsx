import {useState} from "react";

export const Registration = ()=>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        const formData = {
            firstName, lastName, email, password,  phone
        };
        console.log(formData);
    }

    const handleInputChange = (e)=>{
        const {name , value} = e.target;
        switch(name)
        {
            case "firstName": setFirstName(value); break;
            case "lastName": setLastName(value); break;
            case "email": setEmail(value); break;
            case "password": setPassword(value); break;
            case "phone": setPhone(value); break;
        }
    }


    return(
        <>
        <div className="flex items-center justify-center h-screen">
        <div className="bg-white shadow-lg shadow-slate-400 rounded-lg border border-gray-300 p-8 w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700" >First Name</label><input className="mt-1 p-2 border border-gray-300 rounded w-full" type="text" name="firstName" required value={firstName} onChange={handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" >Last Name</label>
                    <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="text" name="lastName" required value={lastName} onChange={handleInputChange}/> 
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" >Email</label>
                    <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="email" name="email" required value={email} onChange={handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" >Password</label>
                    <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="password" name="password" required value={password} onChange={handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" >Phone Number</label>
                    <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="tel" name="phone" required value={phone} onChange={handleInputChange}/>
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-200" type="submit" >Sign Up</button>
            </form>
        </div>
        </div>
        </>
    )
}
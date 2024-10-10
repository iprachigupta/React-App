import {useState} from "react";

export const Registration = ()=>{

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [phone, setPhone] = useState("");
    //instead of taking it separately we can do it by making useState object

    const [users, setUsers] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        phone:""
    })
    
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        // const formData = {
        //     firstName, lastName, email, password,  phone
        // }; instead of this we need to use this
        const formData = users
        console.log(formData);
    }

    // const handleInputChange = (e)=>{
    //     const {name , value} = e.target;
    //     switch(name)
    //     {
    //         case "firstName": setFirstName(value); break;
    //         case "lastName": setLastName(value); break;
    //         case "email": setEmail(value); break;
    //         case "password": setPassword(value); break;
    //         case "phone": setPhone(value); break;
    //     }
    // }
    // instead of this we can shorten the code like this
    const handleInputChange = (event)=>{
        setUsers((prev)=>({...prev, [event.target.name]:event.target.value}))
    };


    return(
        <>
        <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-100 shadow-lg shadow-slate-400 rounded-lg border border-gray-300 p-8 w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700" >First Name</label><input className="mt-1 p-2 border border-gray-300 rounded w-full" type="text" name="firstName" placeholder="please enter the first name" required value={users.firstName} onChange={handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" >Last Name</label>
                    <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="text" name="lastName" placeholder="please enter the last name" required value={users.lastName} onChange={handleInputChange}/> 
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" >Email</label>
                    <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="email" name="email" placeholder="enter the email" required value={users.email} onChange={handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" >Password</label>
                    <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="password" name="password" placeholder="enter the password" required value={users.password} onChange={handleInputChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" >Phone Number</label>
                    <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="tel" name="phone" placeholder="enter the phone number" required value={users.phone} onChange={handleInputChange}/>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg shadow-lg shadow-blue-700/60 hover:opacity-90">Create Account</button>
            </form>
            <h4 className="text-xs text-center mt-4">Already have an account?
                <a href="/login" className="text-blue-500 hover:underline"> Login...</a>
            </h4>
        </div>
        </div>
        </>
    )
}
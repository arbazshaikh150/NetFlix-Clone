import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import BackgroundImg from "../components/BgImg";
import Header from "../components/Header";
import {toast} from 'react-hot-toast'
import { firebaseAuth } from "../Utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../index.css'

function Login(){
    const navigate = useNavigate();

    const [formValue , setFormValue] = useState({
        email : "",
        password : "",
    });

    const handleLogin = async () => {
        console.log(formValue);
        try{
            const {email , password} = formValue;
            await signInWithEmailAndPassword(firebaseAuth , email , password);
        }
        catch(e){
            alert("Invalid Credential");
            return;
        }
    }
    // Sign in ke baad application ke storage mai cookie available rhti hai jiske wajah se ham sign up ke baad login nhi kar paa rhe the ..
    // Hame usse storage mai se delete karna padega.
    onAuthStateChanged(firebaseAuth , (currentUser) => {
        if(currentUser) navigate('/');
    })

    return (
        <div className="">
            <BackgroundImg />
            <div className="h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 bg-black-rgba">
            <Header/>
            <form action="" className="mt-10 w-[30vw] h-[50vh] bg-[#000000b0] flex flex-col justify-center items-center gap-6">
                <h1 className="text-2xl font-bold tracking-wider">Login</h1>
                <input className="w-[300px] h-[50px] p-2 rounded-sm" type="email" name="email" id="email" placeholder="Enter Your Email" value={formValue.email} onChange={(e) => setFormValue({...formValue , [e.target.name] : e.target.value})}/>

                <input className="w-[300px] h-[50px] p-2 rounded-sm" type="password" name="password" value={formValue.password} id="password" placeholder="Enter Your password" onChange={(e) => setFormValue({...formValue , [e.target.name] : e.target.value})}/>

                <button className='bg-[#e50914] p-2 rounded-lg pl-4 pr-4' onClick={handleLogin} type="button">Log In</button>
            </form>
            </div>

        </div>
    )
}
export default Login;
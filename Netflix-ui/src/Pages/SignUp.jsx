import { useState } from "react";
import BackgroundImg from "../components/BgImg";
import Header from "../components/Header";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../Utils/firebase-config";
import { useNavigate } from "react-router-dom";
import '../index.css'


function SignUp(){
    const [isClicked , setIsClicked] = useState(false);
    const navigate = useNavigate();


    const [formValue , setFormValue] = useState({
        email : "",
        password : "",
    });

    const handleSubmit = async () => {
        console.log(formValue);
        try{
            // Storing it in our firebase
            const {email , password} = formValue;
            await createUserWithEmailAndPassword(firebaseAuth , email , password);
        }
        catch(e){
            console.log(e);
        }
    }

    // Firebase function
    // Easy Op

    onAuthStateChanged(firebaseAuth , (currentUser) => {
        if(currentUser) navigate('/');
    })


    return (
        <div>
            <BackgroundImg />
            <div className="h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 bg-black-rgba">
                <Header login/>
                <div className="mt-10 flex flex-col gap-3 w-fit justify-center items-center ">
                    <h1 className="font-bold text-xlg text-4xl text-center">Unlimited movies , TV shows and more</h1>
                    <h4 className="font-semibold text-2xl text-center">Watch AnyWhere Cancel Anytime.</h4>
                    <h6 className="text-1xl text-center">Ready to watch ? Enter your email to create or restart membership</h6>
                </div>
                {/* Form  */}
                <form action="" noValidate className="flex flex-col justify-center items-center">
                    <div className="flex flex-row gap-2 m-4">
                        <input
                        className="w-[300px] h-[50px] p-2"
                        type="email" name="email" id="email" placeholder="Enter Your Email" value={formValue.email } onChange={(e) => setFormValue({...formValue , [e.target.name] : e.target.value})} />

                        {
                            !isClicked && <button type="button"  className='bg-[#e50914] p-2 rounded-lg pl-4 pr-4' onClick={() => setIsClicked(true)}>{"Get Started"} </button>
                        }
                        {
                            isClicked && (
                                <input type="password" 
                                className="w-[300px] h-[50px] p-2" name="password" id="password" placeholder="Enter Your password" value={formValue.password} onChange={(e) => setFormValue({...formValue , [e.target.name] : e.target.value})}/>
                            )
                        }
                    </div>
                    <div>
                        <button type="button" className='bg-[#e50914] p-2 rounded-lg pl-4 pr-4' onClick={handleSubmit}> Sign Up </button>
                    </div>


                </form>
            </div>
        </div>
    )
}
export default SignUp;
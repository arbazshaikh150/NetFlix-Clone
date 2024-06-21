import { useState } from "react";
import BackgroundImg from "../components/BgImg";
import Header from "../components/Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../Utils/firebase-config";

function SignUp(){
    const [isClicked , setIsClicked] = useState(false);

    const [formValue , setFormValue] = useState({
        email : "",
        password : "",
    });

    const handleSubmit = async () => {
        try{
            // Storing it in our firebase
            const {email , password} = formValue;
            await createUserWithEmailAndPassword(firebaseAuth , email , password);
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <div>
            <BackgroundImg />
            <Header login/>
            <div>
                <h1>Unlimited movies , TV shows and more</h1>
                <h4>Watch AnyWhere Cancel Anytime.</h4>
                <h6>Ready to watch ? Enter your email to create or restart membership</h6>
            </div>
            {/* Form  */}
            <form action="" noValidate>
                <input type="email" name="email" id="email" placeholder="Enter Your Email" value={formValue.email } onChange={(e) => setFormValue({...formValue , [e.target.name] : e.target.value})} />
                {
                    !isClicked && <button onClick={() => setIsClicked(true)}>Get Started </button>
                }
                {
                    isClicked && (
                        <input type="password" name="password" id="password" placeholder="Enter Your password" value={formValue.password} onChange={(e) => setFormValue({...formValue , [e.target.name] : e.target.value})}/>
                    )
                }
                <div>
                    <button onClick={handleSubmit}> Sign Up </button>
                </div>


            </form>

        </div>
    )
}
export default SignUp;
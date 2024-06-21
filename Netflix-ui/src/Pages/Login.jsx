import BackgroundImg from "../components/BgImg";
import Header from "../components/Header";

function Login(){
    return (
        <div>
            <BackgroundImg />
            <Header/>
            <form action="" noValidate>
                <h1>Login</h1>
                <input type="email" name="email" id="email" placeholder="Enter Your Email"/>
                <input type="password" name="password" id="password" placeholder="Enter Your password"/>
                <button>Log In</button>
            </form>

        </div>
    )
}
export default Login;
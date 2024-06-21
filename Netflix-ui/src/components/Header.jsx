import { useState } from 'react';
import Logo from '../assest/logo.png'
import { useNavigate } from 'react-router-dom';
function Header(props){
    const navigate = useNavigate();
    return (
        <div>
            <img src={Logo} alt="Logo" />
            <button onClick={() => {
                navigate(props.login ? '/login' : '/signup'); 
            }}>{!props.login ? "Sign Up" : "Log In"}</button>
        </div>
    )
}
export default Header;
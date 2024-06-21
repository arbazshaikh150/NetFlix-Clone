import { useState } from 'react';
import Logo from '../assest/logo.png'
import { useNavigate } from 'react-router-dom';
function Header(props){
    const navigate = useNavigate();
    return (
        <div className='w-full flex items-center justify-between p-3 absolute top-0'>
            <img src={Logo} alt="Logo" className="h-[5rem]"/>
            <button className='bg-[#e50914] p-2 rounded-lg pl-4 pr-4' 
            onClick={() => {
                navigate(props.login ? '/login' : '/signup'); 
            }}>
                {!props.login ? "Sign Up" : "Log In"}
            </button>
        </div>
    )
}
export default Header;
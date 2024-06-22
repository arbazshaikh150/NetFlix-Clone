import { useState } from "react";
import Navbar from "../components/Navbar";
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import BackgroundImg from "../assest/home.jpg";
import MoviesLogo from '../assest/homeTitle.webp'
import '../index.css'
import { Link, useNavigate } from "react-router-dom";



function Netflix(){
    const navigate = useNavigate();
    const [isScrolled , setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled);

    return (
        <div className="relative ">
            <Navbar isScrolled={isScrolled}/>
            {/* Bhot important hai z-index se play karna */}
            <div className="relative z-[-1]">
                <img src={BackgroundImg} alt="BackGround" className="background-Img w-[100vw] h-[100vh]"/>
            </div>
            <div className="absolute bottom-4 m-10 flex flex-col gap-3 z-[0]">
                    <div>
                        <img src={MoviesLogo} alt="" width="100%" height="100%" />
                    </div>
                    <div className="flex gap-6 text-black font-semibold">
                         <button
                         type="button" 
                         onClick={() => navigate('/player')} className="flex justify-center items-center gap-2 text-[1.5rem] bg-clr p-1 pl-4 pr-4 rounded-lg text-black"> <FaPlay /> Play </button>

                        <button className="flex justify-center items-center gap-2 text-[1.5rem] bg-clr p-2 pl-4 pr-4 rounded-lg text-black "><AiOutlineInfoCircle /> More Info</button>
                    </div>
            </div>


        </div>
        
    )
}

export default Netflix;
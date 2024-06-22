import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assest/logo.png'
import { useState } from 'react';
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../Utils/firebase-config';

function Navbar({isScrolled}){

    // const [searchValue , setSearchValue] = useState("");
    const [showSearch , setShowSearch] = useState(false);
    const [inputHover , setInputHover] = useState(false);


    const links = [
        {
            name : 'Home',
            link : '/'
        },
        {
            name : 'Tv Shows',
            link : '/tv'
        },
        {
            name : 'Movies',
            link : '/movies'
        },
        {
            name : 'My List',
            link : '/mylist'
        },
    ];
    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth , (currentUser) => {
        if(!currentUser) navigate('/login');
    })

    console.log("here" , isScrolled);

    return (
        <nav className={`${isScrolled ? "bg-black" : ""} flex gap-5 justify-between pr-10 fixed top-0 w-[100%] z-2`}>
            <div className='flex gap-5 p-2'>
                <img src={Logo} alt="Logo" className="h-[5rem]"/>
                <ul className='flex justify-center items-center gap-8 font-semibold text-lg'>
                    {
                        links.map((link) => <li key={link.name}> <Link to={link.link}>{link.name} </Link> </li>)
                    }
                </ul>
            </div>

            <div className='flex justify-center items-center gap-3 '>
                {/* React icons */}
                <div>
                    <div>
                        <button 

                            onFocus={() => {
                                setShowSearch(true);
                                console.log("Fa Search ke andar change hua");
                            } }

                            // Baad mai consideration main lunga

                            // onBlur={() => {
                            //     console.log("input hover" , inputHover);
                            //     if(!inputHover) setShowSearch(false);
                            // }} 
                            className={`${showSearch ? "hidden" : ""} w-fit p-1 transition-all ease-in-out duration-300`}>
                            <FaSearch />
                        </button>
                    </div>
                    {(
                            <input type="text" name="search" id="search" placeholder='Search'
                            onMouseEnter={() => setInputHover(true)}
                            onMouseLeave={() => setInputHover(false)}
                            onBlur={() => {
                                setShowSearch(false);
                                setInputHover(false);
                            }}
                            className={`${!showSearch ? "hidden" : ""} transition-all ease-in-out duration-300 bg-black-rgba w-[300px] h-[50px] p-2 rounded-lg `}
                            />
                        )
                    }
                </div>
                <div>
                    <button onClick={() => {
                            signOut(firebaseAuth)
                        }}>
                        <FaPowerOff />
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
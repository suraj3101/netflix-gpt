import React from 'react'
import netflixLogo from "../assets/Netflix_Logo_PMS.png"
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const user = useSelector(store => store.user);
  console.log("Our user is: ", user);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black justify-between z-10 flex'>
        <img
            className='w-44'
            src={netflixLogo}
            alt='netflix-logo'
        />
        {user&&<div className='flex p-2'>
          <img
            src={user?.photoURL}
            className='w-10 h-10'
            alt='user-icon'
          />
          <button 
            onClick={handleSignOut}
            className='font-bold text-white'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
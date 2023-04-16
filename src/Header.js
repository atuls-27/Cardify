import React from 'react'
import './App.css'
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'


const Header = () => {
  const navigate = useNavigate()
function goToAbout(){
navigate("/MyCard")

}
  return (
   
    <div className='header'>
        <div className='cardify'> CARDIFY </div>
        <Link to='/MyCard' className='myCards'> my cards </Link>
        {/*<button onClick={goToAbout} className='myCards'> my cards </button>*/}
       <Link to='' className='icon'> <FcGoogle size={35} /> </Link>
    </div>
  )
}

export default Header
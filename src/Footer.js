import React from 'react'
import './App.css'
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <a href=''><BsFacebook size={35} className='icons'  /> </a>
 <a href=''> <BsInstagram size={35} className='icons'/> </a>
  <a href=''> <BsLinkedin size={35} className='icons'/> </a>
 <a href=''> <BsTwitter size={35} className='icons'/> </a>
    </div>
  )
}

export default Footer
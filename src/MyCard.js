import React from 'react'
import './App.css';
import Header2 from './Header2';
import Footer from './Footer';
import {CgSearch} from 'react-icons/cg';
import {BiAddToQueue} from 'react-icons/bi';

const MyCard = () => {
  return (
    <div>
      <Header2 />
      <p className='heading'>My Cards</p>

<button className='button2'>
  <p className='search'> Search 
  </p>
  <CgSearch size={70} />
  </button>

  <button className='button3'>
  <p className='search'> Manual Add
  </p>
  <BiAddToQueue size={70} />
  </button>

<Footer />
    </div>
  )
}

export default MyCard
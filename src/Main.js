import React from 'react'
import './App.css'
import { useNavigate } from 'react-router'

const Main = () => {

  const navigate = useNavigate()
function goToStore(){
navigate("/InsideStore")
}
const navigate2 = useNavigate()
function goToCinema(){
navigate2("/InsideCinema")
}
const navigate3 = useNavigate()
function goToGrocery(){
navigate3("/InsideGrocery")
}

const navigate4 = useNavigate()
function goToHotel(){
navigate3("/InsideHotel")
}

const navigate5 = useNavigate()
function goToTourism(){
navigate3("/InsideTourism")
}

  return (
    <>
        <div>
          <input className='button' type='text' placeholder='search here'></input>
        <button className='location'>Use My location</button>
        </div>
        <h1 className='category'>Quick Category</h1>
        <div className='add'>
            <div className='three'>
            <button className='bu' onClick={goToStore}>Store</button>
            <button className='bu'onClick={goToCinema}>Cinema</button>
            <button className='bu'onClick={goToGrocery}>Grocery</button>
            </div>

            <div className='two'>
            <button className='u' onClick={goToHotel}>Hotel</button>
            <button className='u'onClick={goToTourism}>Tourism</button>
            </div>

        </div>
    </>
  )//lmlm
}

export default Main



import React from 'react';
import {Routes , Route} from "react-router-dom"
import MyCard from './MyCard';
import Home from './Home';
import InsideStore from './InsideStore';
import InsideCinema from './InsideCinema'
import InsideGrocery from './InsideGrocery'
import InsideTourism from './InsideTourism'
import InsideHotel from './InsideHotel'

function App() {
  return (
    
      <Routes>
        <Route path='/Mycard' element={<MyCard />} />
        <Route path='/' element={<Home />} />
        <Route path='/InsideStore' element={<InsideStore />} />
        <Route path='/InsideCinema' element={<InsideCinema />} />
        <Route path='/InsideTourism' element={<InsideTourism />} />
        <Route path='/InsideHotel' element={<InsideHotel />} />
        <Route path='/InsideGrocery' element={<InsideGrocery />} />

      </Routes>
   
   
  );
}

export default App;

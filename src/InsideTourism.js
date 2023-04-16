import React from 'react';
import Card from './Card';
import Header2 from './Header2';
import Footer from './Footer';

const InsideTourism = () => {
  return (
    <div>
      <Header2 />
      
        <Card imgSrc="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png" 
        imgAlt="Card image" 
        title="Make My Trip" 
        description="MakeMyTrip is a pioneer in India’s online travel industry.
         Founded in the year 2000 by Deep Kalra, MakeMyTrip came to life to empower the Indian traveler with instant bookings and comprehensive choices."
        href="https://www.makemytrip.com/"
        link="visit" />
        

<Card imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJinFD2wBZdrojX1O8ADUNARcjuRDVJ8T-2S57SdwHBDxyZhKvHpr6w9Iz_k7xsjA4hi9jDgQ82VU&usqp=CAU&ec=48665698" 
        imgAlt="Card image" 
        title="India Assist" 
        description="Yatra.com is an Indian online travel agency and travel search engine. It is based in Gurugram, Haryana. It was founded by Dhruv
         Shringi, Manish Amin and Sabina Chopra in August 2006"
        href="https://www.yatra.com"
        link="visit" />


<Card imgSrc="https://upload.wikimedia.org/wikipedia/commons/6/6e/Goibibo_logo.png" 
        imgAlt="Card image" 
        title="GoIbibo" 
        description="Goibibo is the largest online hotel booking engine in India and also one of the leading air aggregators. Goibibo is also the number one ranked mobile app under the travel category."
         href="https://www.goibibo.com/"
        link="visit" />
      
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default InsideTourism
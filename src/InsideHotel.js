import React from 'react';
import Card from './Card';
import Header2 from './Header2';
import Footer from './Footer';

const InsideHotel = () => {
  return (
    <div>
      <Header2 />
      
        <Card imgSrc="https://upload.wikimedia.org/wikipedia/commons/5/56/OYO_Rooms_Logo.jpg" 
        imgAlt="Card image" 
        title="OYO" 
        description="Oyo Rooms (stylised as OYO), also known as Oyo Hotels & Homes, is an Indian hospitality chain of leased and franchised hotels, homes 
        and living spaces. Being the youngest in Indonesia, OYO Hotels & Homes started its business in October 2018. "
        href="https://www.oyorooms.com/"
        link="visit" />
        

<Card imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Holiday_Inn_Logo.svg/1200px-Holiday_Inn_Logo.svg.png" 
        imgAlt="Card image" 
        title="Holiday Inn" 
        description="The Holiday Inn brand, with over 1200 hotels worldwide, is the most widely recognized hospitality brand in the world.
         Holiday Inn was one of the earliest international hotel brands. "
         href="https://www.ihg.com/holidayinn/hotels/us/en/reservation"
        link="visit" />


<Card imgSrc="https://tabisso.com/wp-content/uploads/2016/01/hyatt-logo.png" 
        imgAlt="Card image" 
        title="HYATT" 
        description="Hyatt Hotel Corporation is a renowned global hotel company that controls over a dozen major brands such as Andaz and Park Hyatt, Grand Hyatt
         and Hyatt Regency, various upscale boutique hotels under the brands Thompson, Alila, Destination, Joie de Vivre and others. "
         href="https://www.google.com/aclk?sa=l&ai=DChcSEwjVh8TEmaz-AhWImWYCHdPPBTAYABAAGgJzbQ&ase=2&sig=AOD64_1VHs2MfEdRaRrXUFuvdjdQBx7Upw&q&nis=4&adurl&ved=2ahUKEwjU-LnEmaz-AhXbSWwGHQgyAZAQ0Qx6BAgJEAE"
        link="visit" />
      
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default InsideHotel
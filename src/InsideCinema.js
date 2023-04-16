import React from 'react';
import Card from './Card';
import Header2 from './Header2';
import Footer from './Footer';

const InsideCinema = () => {
  return (
    <div>
      <Header2 />
      
        <Card imgSrc="https://www.pvrcinemas.com/assets/images/new_logo.png" 
        imgAlt="Card image" 
        title ="PVR" 
        description="PVR Ltd, doing business as PVR Cinemas, is an Indian multiplex chain based in Gurgaon. PVR pioneered the
         multiplex revolution in India by establishing the first multiplex cinema in 1997 at Saket, New Delhi."
         href="https://www.pvrcinemas.com/"
        link="visit" />
        

<Card imgSrc="https://etimg.etb2bimg.com/photo/62679947.cms" 
        imgAlt="Card image" 
        title="Carnival" 
        description="Theater showing the latest Bollywood hits, cult classics & some international films."
        href="https://www.carnivalcinemas.com/"
        link="visit" />


<Card imgSrc="https://www.exchange4media.com/news-photo/1524231808_K2DsPp_big_(48).jpg" 
        imgAlt="Card image" 
        title="INOX" 
        description="INOX Leisure or INOX Movies is an Indian multiplex chain based in Mumbai. As of December 2022, it has 170 multiplexes
         and 722 screens in 74 cities of the country. INOX Leisure Limited is the entertainment venture of the INOX Group."
         href="https://www.inoxmovies.com/"
        link="visit" />
      
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default InsideCinema
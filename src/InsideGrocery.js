import React from 'react';
import Card from './Card';
import Header2 from './Header2';
import Footer from './Footer';

const InsideGrocery = () => {
  return (
    <div>
      <Header2 />
      
        <Card imgSrc="https://upload.wikimedia.org/wikipedia/commons/c/c2/Big_Bazaar_Logo.svg" 
        imgAlt="Card image" 
        title="Big Bazar" 
        description="Big Bazaar, home of childhood memories, is owned by the Future Group. It is one of the largest supermarket chains in India. With a large selection
         in each area, Big Bazaar has been selling several brands and goods at lower costs to the lower-middle and upper-middle classes."
         href="https://futureretail.in/businesses/big-bazaar.html"
        link="visit" />
        

<Card imgSrc="https://findvectorlogo.com/wp-content/uploads/2018/12/dmart-vector-logo.png" 
        imgAlt="Card image" 
        title="D-Mart" 
        description="D-Mart franchise is an Indian retail firm that owns and manages a chain of hypermarkets in India. 
        It is known for its low prices and is popular among middle-class families. The products’ availability here is massive and of great quality."
        href="https://www.dmartindia.com/"
        link="visit" />


<Card imgSrc="https://searchlogovector.com/wp-content/uploads/2020/04/reliance-fresh-logo-vector.png" 
        imgAlt="Card image" 
        title="Reliance Fresh" 
        description="Reliance Fresh is one of India’s leading neighborhood retail networks, with a reputation for quality and value. Reliance Fresh, 
        with its USP, is recognized for their low prices. The company claims to be cheaper in comparison to local grocery stores."
        href="https://www.google.com/aclk?sa=l&ai=DChcSEwjO4qz3mKz-AhVWDysKHU-WB9AYABAAGgJzZg&ase=2&sig=AOD64_03Lqy4Ekso4_cCzgG3tUA-WovAkw&q&nis=4&adurl&ved=2ahUKEwjj0KL3mKz-AhWxXWwGHZV_B7sQ0Qx6BAgGEAE"
        link="visit" />
      
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default InsideGrocery
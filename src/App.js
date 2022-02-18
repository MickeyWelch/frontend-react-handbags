import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile";

import bagOne from "./assets/bag_1.png";
import bagTwo from "./assets/bag_2.png";
import bagThree from "./assets/bag_3.png";
import bagFour from "./assets/bag_4.png";
import brandImage from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button value={'To the collection'} />
          <Button value={'Shop all bags'} />
          <Button value={'Pre-orders'} disableButton={true} />
        </nav>
          <main>
              <Product
                  label={"bestseller"}
                  image={bagOne}
                  price={"400"}
                  name={"The handy bag"}
              />
              <Product
                  label={"bestseller"}
                  image={bagTwo}
                  price={"250"}
                  name={"The stylish bag"}
              />
              <Product
                  label={"New Collection"}
                  image={bagThree}
                  price={"300"}
                  name={"The simple bag"}
              />
              <Product
                  label={"New Collection"}
                  image={bagFour}
                  price={"150"}
                  name={"The trendy bag"}
              />
          </main>
          <footer>
              <Tile
                  title={"The Brand"}
                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores aspernatur assumenda cum ipsam ipsum iusto quidem soluta unde. Ad adipisci asperiores aspernatur consequatur consequuntur doloremque illum mollitia porro soluta!"}
              />
              <Tile
                  image={brandImage}
              />
              <Tile image={ourStory}/>
              <Tile
                  title={"Our Story"}
                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores aspernatur assumenda cum ipsam ipsum iusto quidem soluta unde. Ad adipisci asperiores aspernatur consequatur consequuntur doloremque illum mollitia porro soluta!"}
              />
          </footer>
      </>
  );
}

export default App;




import { useState } from "react";

import Button from "./components/Button";
import Image from "./components/Image";
import cat1 from "./assets/cats/1.png";
import cat2 from "./assets/cats/2.png";
import cat3 from "./assets/cats/3.png";
import cat4 from "./assets/cats/4.png";
import cat5 from "./assets/cats/5.png";
import "./App.css";

const cats = [cat1, cat2, cat3, cat4, cat5];

function App() {
  const [randomCatImage, setRandomCatImage] = useState(cats[0]);

  const onClick = () => {
    // select a random cat Image
    const randomNumber = Math.random() * cats.length;
    const randomInteger = Math.floor(randomNumber);
    const randomCat = cats[randomInteger];

    // store the selected random cat image in state
    setRandomCatImage(randomCat);
  };

  return (
    <div className="App">
      <div id="cat-app-container">
        <Image source={randomCatImage} alt={"cat1"} />
        <Button label={"Change Cat"} onClick={onClick} />
      </div>
    </div>
  );
}

export default App;

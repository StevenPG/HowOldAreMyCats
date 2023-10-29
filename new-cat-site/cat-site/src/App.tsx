import React, {useEffect} from 'react';
import './App.css';
import init, { time_since} from "age-calc-lib";
import BasicCard from "./app/catcard/Card";
import ButtonAppBar from "./app/TopBar";

import textContent from "./app/contents.json"

function App() {

  // TODO - remove and add to lower card where calculation occurs
  useEffect(() => {
    init().then(() => {
      console.log(time_since("2019-10-12T07:20:50.52Z"));
    })
  })

  // TODO - add carousel to images in card: https://www.npmjs.com/package/react-responsive-carousel
  return (
    <div className="App">
      <header className="App-header">
        {/*// TODO - rename and stretch across whole screen*/}
        {/*// TODO - add a filter that will hide cards when you type in the filter*/}
        <ButtonAppBar/>
        {/* TODO Change this into a loop that passes base object if possible */}
        {/*TODO - make cards side by side with space in between the cards*/}
        <BasicCard
            name={textContent.cards.eli.name}
            // TODO - get this from a method call that adds a list
            nicknames={textContent.cards.eli.nicknames}
            description={textContent.cards.eli.description}
        />
        <BasicCard
            name={textContent.cards.umbra.name}
            description={textContent.cards.umbra.description}
        />
        <BasicCard
            name={textContent.cards.bucket.name}
            description={textContent.cards.bucket.description}
        />
        <BasicCard
            name={textContent.cards.bitty.name}
            description={textContent.cards.bitty.description}
        />
        <BasicCard
            name={textContent.cards.bones.name}
            description={textContent.cards.bones.description}
        />
        <BasicCard
            name={textContent.cards.pixie.name}
            description={textContent.cards.pixie.description}
        />
        <BasicCard
            name={textContent.cards.milk.name}
            description={textContent.cards.milk.description}
        />
        <BasicCard
            name={textContent.cards.bones.name}
            description={textContent.cards.bones.description}
        />
        <BasicCard
            name={textContent.cards.wobble.name}
            description={textContent.cards.wobble.description}
        />
        <BasicCard
            name={textContent.cards.pancake.name}
            description={textContent.cards.pancake.description}
        />
        <BasicCard
            name={textContent.cards.triscuit.name}
            description={textContent.cards.triscuit.description}
        />
      </header>
    </div>
  );
}

export default App;

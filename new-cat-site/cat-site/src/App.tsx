import React, {useEffect} from 'react';
import './App.css';
import init, {time_since} from "age-calc-lib";
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

    let cardJson = JSON.parse(textContent["cards"])

    let cardList = cardJson.map(
        (element: {
            name: string;
            nicknames: string;
            description: string; }, index: number) => (
            <BasicCard
                name={element.name}
                // TODO - get this from a method call that adds a list
                nicknames={element.nicknames}
                description={element.description}
            />
        )
    );

    // TODO - add carousel to images in card: https://www.npmjs.com/package/react-responsive-carousel
    return (
        <div className="App">
            <header className="App-header">
                {/*// TODO - rename and stretch across whole screen*/}
                {/*// TODO - add a filter that will hide cards when you type in the filter*/}
                <ButtonAppBar/>
                {/* TODO Change this into a loop that passes base object if possible */}
                {/*TODO - make cards side by side with space in between the cards*/}
            </header>
        </div>
    );
}

export default App;

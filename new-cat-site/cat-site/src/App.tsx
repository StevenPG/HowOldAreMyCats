import React from 'react';
import './App.css';
import init, {time_since} from "age-calc-lib";
import BasicCard from "./app/catcard/Card";
import TopBar from "./app/TopBar";

import textContent from "./app/contents.json"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function App() {

    // TODO -

    init().then(() => {
        console.log(time_since("2019-10-12T07:20:50.52Z"))
    })

    // TODO - add carousel to images in card: https://www.npmjs.com/package/react-responsive-carousel
    return (
        <div className="App">
            <header className="App-header">
                {/*// TODO - rename and stretch across whole screen*/}
                {/*// TODO - add a filter that will hide cards when you type in the filter*/}
                <div style={{marginBottom: "3em"}}>
                    <TopBar/>
                </div>
                <Grid container spacing={1}>
                    {
                        textContent.cards.map(item => (
                            <Grid md={6}>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <BasicCard
                                        name={item.name}
                                        nicknames={item.nicknames}
                                        description={item.description}
                                        // TODO - run the calculation per input correctly
                                        // age={time_since("2003-11-18T04:32:05Z")}
                                        // age={time_since(item.birthdate)}
                                        age="1"
                                        images={item.images}
                                    />
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
                {/* TODO Change this into a loop that passes base object if possible */}
                {/*TODO - make cards side by side with space in between the cards*/}
            </header>
        </div>
    );
}

export default App;

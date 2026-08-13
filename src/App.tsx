import React from 'react';
import './App.css';
import BasicCard from "./app/catcard/Card";
import TopBar from "./app/TopBar";

import textContent from "./app/contents.json"
import Grid from '@mui/material/Unstable_Grid2';

function App() {

    /**
     * Returns the number of years and months of age
     * @param isoBirthdate incoming iso Birthdate
     * @param isoDeathDate incoming deathdate, if empty use birthDate
     */
    function time_since(isoBirthdate: string, isoDeathDate: string): string {
        let currDate = new Date();
        const useBirthDate = isoDeathDate === undefined || isoDeathDate === "" || isoDeathDate === null;
        let calculationDate = new Date(useBirthDate ? isoBirthdate : isoDeathDate);
        let differenceInTimeMillis;
        if(useBirthDate) {
            differenceInTimeMillis = currDate.getTime() - calculationDate.getTime();
        } else {
            differenceInTimeMillis = calculationDate.getTime() - new Date(isoBirthdate).getTime();
        }
        let differenceInTimeSeconds = differenceInTimeMillis / 1000;
        let differenceInTimeMinutes = differenceInTimeSeconds / 60;
        let differenceInTimeHours = differenceInTimeMinutes / 60;
        let differenceInTimeDays = differenceInTimeHours / 24;
        let yearQuotient = Math.floor(differenceInTimeDays / 365);
        let yearRemainder = differenceInTimeDays % 365;
        let monthQuotient = Math.floor(yearRemainder / 30);
        return yearQuotient + " Years " + monthQuotient + " Months old";
    }

    return (
        <div className="App">
            <header className="App-header">
                {/*// TODO - add a filter that will hide cards when you type in the filter*/}
                <div style={{marginBottom: "3em"}}>
                    <TopBar
                        content={textContent.cards}
                    />
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
                                        birthdate={item.birthdate}
                                        deathdate={item.deathdate}
                                        sounds={item.sounds}
                                        age={time_since(item.birthdate, item.deathdate)}
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

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import textContent from "./contents.json";
import { nextBirthdayAsStr } from './birthday-calc';

export default function TopBar(props: any) {

    const initialText = textContent["topBar"]["textBeginning"];

    const styles = {
        maxWidth: {
            width: "100%"
        },
        strikethru: {
            textDecoration: "line-through"
        }
    };

    return (
        <Box>
            <AppBar style={styles.maxWidth}>
                <Toolbar>
                    {/* Align text with center of screen */}
                    <Typography variant="h5" component="div">
                        { initialText }
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" component="div" style={styles.strikethru}>
                        { textContent["topBar"]["textStruckThrough"] }
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" component="div">
                        { textContent["topBar"]["textEnd"]}
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" component="div">
                        - Next Birthday Is {nextBirthdayAsStr()}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
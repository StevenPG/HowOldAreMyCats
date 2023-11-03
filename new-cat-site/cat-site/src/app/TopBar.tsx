import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import textContent from "./contents.json";

export default function ButtonAppBar() {

    const initialText = textContent["topBar"]["textBeginning"];

    return (
        <Box>
            <AppBar style={{width: "100%"}}>
                <Toolbar>
                    {/* Align text with center of screen */}
                    <Typography variant="h5" component="div">
                        { initialText }
                    </Typography>
                    <Typography variant="h5" component="div" style={{textDecoration: "line-through"}}>
                        { textContent["topBar"]["textStruckThrough"] }
                    </Typography>
                    {/* TODO insert a space */}
                    <Typography variant="h5" component="div">
                        { textContent["topBar"]["textEnd"]}
                    </Typography>
                    {/* // TODO put strike-thrus */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
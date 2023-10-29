import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import textContent from "./contents.json";

export default function ButtonAppBar() {
    // TODO - remove the ts-ignore and fix the error
        // @ts-ignore
    let initialText = textContent["top-bar"]["main-text"].beginning;

    return (
        <Box>
            <AppBar style={{width: "100%"}}>
                <Toolbar>
                    {/* Align text with center of screen */}
                    <Typography variant="h5" component="div">
                        { initialText }
                    </Typography>
                    <Typography variant="h5" component="div" style={{textDecoration: "line-through"}}>
                        {/*@ts-ignore*/}
                        { textContent["top-bar"]["main-text"]["struck-through"] }
                    </Typography>
                    {/* TODO insert a space */}
                    <Typography variant="h5" component="div">
                        {/*@ts-ignore*/}
                        { textContent["top-bar"]["main-text"].end}
                    </Typography>
                    {/* // TODO put strike-thrus */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
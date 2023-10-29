import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import textContent from "./contents.json";
import {makeStyles} from "@mui/material";
import getTextDecoration from "@mui/material/Link/getTextDecoration";

export default function ButtonAppBar() {
        return (
        <Box>
            <AppBar style={{width: "100%"}}>
                <Toolbar>
                    {/* Align text with center of screen */}
                    <Typography variant="h5" component="div">
                        { textContent["top-bar"]["main-text"].beginning }
                    </Typography>
                    <Typography variant="h5" component="div" style={{textDecoration: "line-through"}}>
                        { textContent["top-bar"]["main-text"]["struck-through"] }
                    </Typography>
                    {/* TODO insert a space */}
                    <Typography variant="h5" component="div">
                        { textContent["top-bar"]["main-text"].end}
                    </Typography>
                    {/* // TODO put strike-thrus */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
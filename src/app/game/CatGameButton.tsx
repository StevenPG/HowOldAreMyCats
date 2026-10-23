import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import { SportsEsports } from '@mui/icons-material';

import CatGame from './CatGame';

/**
 * The top bar entry point for the game. The modal unmounts its contents on close,
 * which also stops the game loop.
 */
export default function CatGameButton() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Button
                variant="soft"
                color="neutral"
                size="sm"
                startDecorator={<SportsEsports/>}
                onClick={() => setOpen(true)}
            >
                Play
            </Button>
            {/* An opaque backdrop instead of Joy's default live blur, which flickers over the page's
                autoplaying videos and carousels while the game redraws every frame. */}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                slotProps={{ backdrop: { sx: { backdropFilter: 'none', backgroundColor: 'background.body' } } }}
            >
                <ModalDialog layout="fullscreen" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ModalClose sx={{ zIndex: 2 }}/>
                    <CatGame/>
                </ModalDialog>
            </Modal>
        </>
    );
}

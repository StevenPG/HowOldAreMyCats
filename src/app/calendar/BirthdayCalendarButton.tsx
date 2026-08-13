import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import { CalendarMonth } from '@mui/icons-material';

import BirthdayCalendar from './BirthdayCalendar';

/**
 * The top bar entry point for the calendar: collapsed to a single button until
 * clicked, then shown as a modal over the cards.
 */
export default function BirthdayCalendarButton(props: { label: string }) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Button
                variant="soft"
                color="neutral"
                size="sm"
                startDecorator={<CalendarMonth/>}
                onClick={() => setOpen(true)}
            >
                {props.label}
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog sx={{ width: "min(760px, 95vw)", maxHeight: "90vh", overflowY: "auto" }}>
                    <ModalClose/>
                    <Typography level="title-md" sx={{ mb: 1 }}>Cat Calendar</Typography>
                    {/* Closing on navigate so the anchor jump isn't hidden behind the modal. */}
                    <BirthdayCalendar onNavigate={() => setOpen(false)}/>
                </ModalDialog>
            </Modal>
        </>
    );
}

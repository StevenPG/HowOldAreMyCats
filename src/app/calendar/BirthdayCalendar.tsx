import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { IconButton } from '@mui/joy';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

import { catEvents, daysUntil, CatEvent } from '../birthday-calc';

const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const DAY_NAMES = ["S", "M", "T", "W", "T", "F", "S"];

const EVENTS = catEvents();

function anchorFor(name: string): string {
    return `#${name.replace(/\s+/g, '-')}`;
}

/** Every event landing on a given month/day, birthdays first. */
function eventsOn(month: number, day: number): CatEvent[] {
    return EVENTS
        .filter(event => event.month === month && event.day === day)
        .sort((a, b) => a.kind === b.kind ? a.name.localeCompare(b.name) : (a.kind === "birthday" ? -1 : 1));
}

function ordinal(n: number): string {
    const remainderTen = n % 10;
    const remainderHundred = n % 100;
    if (remainderTen === 1 && remainderHundred !== 11) return `${n}st`;
    if (remainderTen === 2 && remainderHundred !== 12) return `${n}nd`;
    if (remainderTen === 3 && remainderHundred !== 13) return `${n}rd`;
    return `${n}th`;
}

/** "Bones turns 6" / "Remembering Eli" - the text shown when hovering a marked day. */
function describe(event: CatEvent, displayedYear: number): string {
    const age = displayedYear - event.year;
    if (event.kind === "birthday") {
        if (age <= 0) return `${event.name} was born`;
        // Counting up birthdays a cat won't have doesn't feel right, so keep it simple for them.
        return event.passed ? `${event.name}'s birthday` : `${event.name}'s ${ordinal(age)} birthday`;
    }
    return `Remembering ${event.name}`;
}

export default function BirthdayCalendar() {
    const today = new Date();
    const [month, setMonth] = React.useState(today.getMonth());
    const [year, setYear] = React.useState(today.getFullYear());

    function shiftMonth(delta: number) {
        const shifted = new Date(year, month + delta, 1);
        setMonth(shifted.getMonth());
        setYear(shifted.getFullYear());
    }

    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Leading blanks so the 1st lands under the right weekday.
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstWeekday; i++) {
        cells.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        cells.push(day);
    }

    const upcoming = EVENTS
        .filter(event => event.kind === "birthday" && !event.passed)
        .map(event => ({ event, days: daysUntil(event.month, event.day, today) }))
        .sort((a, b) => a.days - b.days)
        .slice(0, 3);

    return (
        <Card sx={{ width: "min(560px, 90%)", marginBottom: "2em" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <IconButton aria-label="previous month" onClick={() => shiftMonth(-1)}>
                    <ChevronLeft/>
                </IconButton>
                <Typography level="title-lg">{MONTH_NAMES[month]} {year}</Typography>
                <IconButton aria-label="next month" onClick={() => shiftMonth(1)}>
                    <ChevronRight/>
                </IconButton>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                {DAY_NAMES.map((dayName, i) => (
                    <Typography key={i} level="body-xs" sx={{ textAlign: "center", opacity: 0.7 }}>
                        {dayName}
                    </Typography>
                ))}
                {cells.map((day, i) => {
                    if (day === null) {
                        return <div key={i}/>;
                    }

                    const dayEvents = eventsOn(month, day);
                    const isToday = day === today.getDate()
                        && month === today.getMonth()
                        && year === today.getFullYear();
                    const hasBirthday = dayEvents.some(event => event.kind === "birthday");
                    const label = dayEvents.map(event => describe(event, year)).join(", ");

                    const cell = (
                        <div
                            style={{
                                minHeight: "40px",
                                padding: "2px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "6px",
                                fontSize: "0.8rem",
                                lineHeight: 1,
                                border: isToday ? "2px solid #1976d2" : "2px solid transparent",
                                backgroundColor: hasBirthday ? "rgba(25, 118, 210, 0.12)" : undefined,
                            }}
                        >
                            <span>{day}</span>
                            <span style={{ fontSize: "0.7rem", minHeight: "0.8rem" }}>
                                {dayEvents.map(event => event.kind === "birthday" ? "🎂" : "😇").join("")}
                            </span>
                        </div>
                    );

                    if (dayEvents.length === 0) {
                        return <div key={i}>{cell}</div>;
                    }

                    return (
                        <Tooltip key={i} title={label} arrow>
                            <a
                                href={anchorFor(dayEvents[0].name)}
                                aria-label={label}
                                style={{ color: "inherit", textDecoration: "none" }}
                            >
                                {cell}
                            </a>
                        </Tooltip>
                    );
                })}
            </div>

            <Typography level="body-sm" sx={{ mt: 1 }}>
                {upcoming.map(({ event, days }, i) => (
                    <React.Fragment key={event.name}>
                        {i > 0 && " • "}
                        <a href={anchorFor(event.name)} style={{ color: "inherit" }}>
                            {event.name}
                        </a>
                        {days === 0 ? " today! 🎉" : ` in ${days} day${days === 1 ? "" : "s"}`}
                    </React.Fragment>
                ))}
            </Typography>
        </Card>
    );
}

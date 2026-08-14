import * as React from 'react';
import Typography from '@mui/joy/Typography';
import { IconButton } from '@mui/joy';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import { catEvents, daysUntil, CatEvent } from '../birthday-calc';

const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

/** "Bones' 6th birthday" / "Remembering Eli" - the full text behind each name chip. */
function describe(event: CatEvent, displayedYear: number): string {
    const age = displayedYear - event.year;
    if (event.kind === "birthday") {
        if (age <= 0) return `${event.name} was born`;
        // Counting up birthdays a cat won't have doesn't feel right, so keep it simple for them.
        return event.passed ? `${event.name}'s birthday` : `${event.name}'s ${ordinal(age)} birthday`;
    }
    return `Remembering ${event.name}`;
}

/** One cat's name inside a day cell, linking to their card. */
function EventChip(props: { event: CatEvent, displayedYear: number, onNavigate?: () => void }) {
    const { event, displayedYear, onNavigate } = props;
    const isBirthday = event.kind === "birthday";

    return (
        <a
            href={anchorFor(event.name)}
            onClick={onNavigate}
            title={describe(event, displayedYear)}
            style={{
                display: "block",
                width: "100%",
                fontSize: "0.65rem",
                lineHeight: 1.25,
                padding: "1px 3px",
                borderRadius: "4px",
                textDecoration: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontStyle: isBirthday ? "normal" : "italic",
                color: isBirthday ? "#0b4f9e" : "#5a5a5a",
                backgroundColor: isBirthday ? "rgba(25, 118, 210, 0.16)" : "rgba(0, 0, 0, 0.06)",
            }}
        >
            {isBirthday ? "🎂 " : ""}{event.name}
        </a>
    );
}

export default function BirthdayCalendar(props: { onNavigate?: () => void }) {
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
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <IconButton aria-label="previous month" onClick={() => shiftMonth(-1)}>
                    <ChevronLeft/>
                </IconButton>
                <Typography level="title-lg">{MONTH_NAMES[month]} {year}</Typography>
                <IconButton aria-label="next month" onClick={() => shiftMonth(1)}>
                    <ChevronRight/>
                </IconButton>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "3px" }}>
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

                    return (
                        <div
                            key={i}
                            style={{
                                minHeight: "58px",
                                padding: "2px",
                                borderRadius: "6px",
                                border: isToday ? "2px solid #1976d2" : "2px solid transparent",
                                backgroundColor: dayEvents.length > 0 ? "rgba(25, 118, 210, 0.05)" : undefined,
                            }}
                        >
                            <Typography level="body-xs" sx={{ fontWeight: isToday ? "lg" : "md" }}>
                                {day}
                            </Typography>
                            {dayEvents.map(event => (
                                <EventChip
                                    key={`${event.name}-${event.kind}`}
                                    event={event}
                                    displayedYear={year}
                                    onNavigate={props.onNavigate}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>

            <Typography level="body-xs" sx={{ mt: 1, opacity: 0.7 }}>
                🎂 birthday &nbsp;·&nbsp; <i>italics</i> = in memory
            </Typography>

            <Typography level="body-sm" sx={{ mt: 0.5 }}>
                Coming up:{" "}
                {upcoming.map(({ event, days }, i) => (
                    <React.Fragment key={event.name}>
                        {i > 0 && " • "}
                        <a href={anchorFor(event.name)} onClick={props.onNavigate} style={{ color: "inherit" }}>
                            {event.name}
                        </a>
                        {days === 0 ? " today! 🎉" : ` in ${days} day${days === 1 ? "" : "s"}`}
                    </React.Fragment>
                ))}
            </Typography>
        </div>
    );
}

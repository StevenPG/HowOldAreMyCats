import textContent from "./contents.json";

/**
 * Checks if the deathdate is empty or undefined
 * @param deathdate the deathdate of the cat
 */
export function isAlive(deathdate: string): boolean {
    return deathdate === "" || deathdate === undefined;
}

export type CatEvent = {
    name: string;
    /** "birthday" for every cat, "memorial" for cats that have passed */
    kind: "birthday" | "memorial";
    /** 0-indexed month, matching Date#getMonth */
    month: number;
    /** day of the month, matching Date#getDate */
    day: number;
    /** the original year the event happened */
    year: number;
    /** true when this cat has passed away */
    passed: boolean;
};

/**
 * Flattens contents.json into the day-of-year events the calendar renders.
 * Every cat contributes a birthday; cats that have passed also contribute a memorial day.
 */
export function catEvents(): CatEvent[] {
    const events: CatEvent[] = [];
    textContent.cards.forEach(details => {
        const passed = !isAlive(details.deathdate);
        const birth = new Date(details.birthdate);
        events.push({
            name: details.name,
            kind: "birthday",
            month: birth.getMonth(),
            day: birth.getDate(),
            year: birth.getFullYear(),
            passed,
        });

        if (passed) {
            const death = new Date(details.deathdate);
            events.push({
                name: details.name,
                kind: "memorial",
                month: death.getMonth(),
                day: death.getDate(),
                year: death.getFullYear(),
                passed,
            });
        }
    });
    return events;
}

/**
 * Number of days between today and the next occurrence of a month/day, where
 * today counts as 0.
 */
export function daysUntil(month: number, day: number, from: Date = new Date()): number {
    const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    let next = new Date(today.getFullYear(), month, day);
    if (next.getTime() < today.getTime()) {
        next = new Date(today.getFullYear() + 1, month, day);
    }
    return Math.round((next.getTime() - today.getTime()) / (1000 * 3600 * 24));
}

/**
 * This takes in the entire props structure and manipulates incoming string data to generate
 * a formatted output to be directly displayed.
 * @returns the next birthday details as a string used for the banner of the page
 */
export function nextBirthdayAsStr(): string {
    let soonestName: string = ""
    let soonestDays: number = 99999
    textContent.cards.forEach(details => {
        // Difference between todays date and birthdate
        let diffDays;

        if(isAlive(details.deathdate)) {
            const birthDayDate = new Date(details.birthdate);
            const todaysDate = new Date();

            // Assign birthday to the current year to test next birthday
            birthDayDate.setFullYear(todaysDate.getFullYear());

            const dateDiff = birthDayDate.getTime() - todaysDate.getTime()
            if(dateDiff < 0) {
                // Birthday has already passed so we recalculate for next year
                birthDayDate.setFullYear(todaysDate.getFullYear() + 1);
                const dateDiffNextYear = birthDayDate.getTime() - todaysDate.getTime()
                diffDays = Math.ceil(dateDiffNextYear / (1000 * 3600 * 24));
            } else {
                diffDays = Math.ceil(dateDiff / (1000 * 3600 * 24));
            }

            if (diffDays < soonestDays) {
                soonestName = details.name
                soonestDays = diffDays
            }
        }
    })

    return `${soonestName}`;
}
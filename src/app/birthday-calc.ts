import textContent from "./contents.json";

/**
 * Checks if the deathdate is empty or undefined
 * @param deathdate the deathdate of the cat
 */
function isAlive(deathdate: string): boolean {
    return deathdate === "" || deathdate === undefined;
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
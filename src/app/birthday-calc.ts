import textContent from "./contents.json";

/**
 * This takes in the entire props structure and manipulates incoming string data to generate
 * a formatted output to be directly displayed.
 * @returns the next birthday details as a string used for the banner of the page
 */
export function nextBirthdayAsStr(): string {
    let soonestName: string = ""
    let soonestDays: number = 99999
    textContent.cards.forEach(details => {
        console.log(details.deathdate);
        if(details.deathdate === "" || details.deathdate === undefined) {
            const date = new Date(details.birthdate);
            const todaysDate = new Date();

            date.setFullYear(2000);
            todaysDate.setFullYear(2000);

            let diff = date.getTime() - todaysDate.getTime()
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

            // Number of diff days is in the future, and is less than current soonest days
            if (diffDays > 0 && diffDays < soonestDays) {
                soonestName = details.name
                soonestDays = diffDays
            }
        }
    })

    return `${soonestName}`;
}
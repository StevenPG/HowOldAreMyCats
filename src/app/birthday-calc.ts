import textContent from "./contents.json";

/**
 * This takes in the entire props structure and manipulates incoming string data to generate
 * a formatted output to be directly displayed.
 * @returns the next birthday details as a string used for the banner of the page
 */
export function nextBirthdayAsStr(): string {
    let soonestName: string = ""
    let soonestDate: Date = new Date()
    let soonestDays: number = 99999
    textContent.cards.forEach(details => {
        const date = new Date(details.birthdate);
        const todaysDate = new Date();

        date.setFullYear(2000);
        todaysDate.setFullYear(2000);
        
        let diff = date.getTime() - todaysDate.getTime()
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

        // Number of diff days is in the future, and is less than current soonest days
        if (diffDays > 0 && diffDays < soonestDays) {
            soonestName = details.name
            soonestDate = new Date(details.birthdate)
            soonestDays = diffDays
        }
    })

    return `${soonestName}`;
}
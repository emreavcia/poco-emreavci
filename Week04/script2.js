const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const wocheTages = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]

for (let i = 0; i <= 6; i++) {
    console.log(`${daysOfWeek[i]}: ${wocheTages[i]}`)
}

daysOfWeek.forEach((element, index) => {
    console.log(`${element}: ${wocheTages[index]}`)
});
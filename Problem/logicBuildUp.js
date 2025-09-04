//——————————————————————————————————————————————————————
//Problem 1
function mileToYards(mile) {
    const yards = mile * 1760;
    return yards;
}
console.log(mileToYards(13));

//Problem 2
function kiloToKalore(kilo) {
    const kalore = kilo * 860;
    return kalore;
}

console.log(kiloToKalore(13));

//Problem 3
function hoursToSec(hours) {
    const minutes = hours * 60;
    const seconds = minutes * 60;
    return seconds;
}

console.log(hoursToSec(1));

//Problem 4
function centimetreToMetre(centimetre) {
    const metre = centimetre / 100;
    return metre;
}

console.log(centimetreToMetre(200));

//Problem 5
function inchToCentimetre(inch) {
    const centimetre = inch * 2.54;
    console.log(centimetre);
}

inchToCentimetre(55);

//Problem 6
function poundToKilogram(pound) {
    const kilogram = pound * 0.453;
    return kilogram;
}

console.log(poundToKilogram(5));

//Problem 7
function yardsToMetre(yards) {
    const metre = yards * 0.91;
    return metre;
}

console.log(yardsToMetre(10));

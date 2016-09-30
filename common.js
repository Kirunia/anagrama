let wordsList = ["shoes", "milk", "table","opportunity","achievement", "hope", "sadness","summer", "bottle", "environment", "lion","potato","animal"];

function pickWord() {
        let initialWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
        return initialWord;
    }
function pickRandomNumber(rangeStart, rangeEnd) {
    let randomNumber = rangeStart + Math.floor(Math.random() * (rangeEnd - (rangeStart + 1)));
    return randomNumber;
} 
let wordsList = ["milk", "lion", "hope", "rope", "butterfly", "computer", "avocado", "mouse", "cheese", "robot", "flowers", "bird", "nationality", "environment", "hapiness", "hour", "occupation", "prescription", "country", "government"];

function pickWord() {
        let initialWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
        return initialWord;
    }
function pickRandomNumber(rangeStart, rangeEnd) {
    let randomNumber = rangeStart + Math.floor(Math.random() * (rangeEnd - (rangeStart + 1)));
    return randomNumber;
} 
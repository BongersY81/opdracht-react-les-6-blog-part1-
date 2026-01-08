

function getReadTime(text) {
const wordArray = text.split(" ");
const amountOfWords = wordArray.length
    const getReadTime = Math.round(amountOfWords / 100 * 0.3)
return(getReadTime)
}

export default getReadTime;
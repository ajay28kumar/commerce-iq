export const getRandomCard = (length, baseValue) => {
    const cardList = [...cardNames];
    const indexOfBaseValue  = cardList.indexOf(baseValue);
    cardList.splice(indexOfBaseValue,1)
    return shuffleArray([...shuffleArray(cardList).slice(0,length-1), baseValue])
}

export const cardNames = [
    'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '0S', 'JS', 'QS','KS',
    'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '0D', 'JD', 'QD','KD',
    'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '0C', 'JC', 'QC','KC',
    'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '0H', 'JH', 'QH','KH',
]


export const shuffleArray= (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

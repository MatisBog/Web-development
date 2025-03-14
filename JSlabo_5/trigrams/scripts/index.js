const setup = () => {
    let onoorbaar = "onoorbaar";
    makeTrigrams(onoorbaar);
}
const makeTrigrams = (woord) => {
    let trigramArray = [];
    let trigram = "";
    for (let i = 0; i < woord.length-2 ; i++) {
        trigram = woord.slice(i, i+3);
        trigramArray.push(trigram);
    }
    console.log(trigramArray);
}
window.addEventListener("load", setup);
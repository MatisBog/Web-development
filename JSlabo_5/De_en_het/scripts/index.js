const setup = () => {
    let tekst = "Gisteren zat de dezelfde jongen op de stoep en at de helft van de appel";
    vervang(tekst);
}
const vervang = (zin) => {
    let zinnetje = zin.toLowerCase();
    let resultaat = "";
    let i = 0;
    while (i < zinnetje.length) {
        if (zinnetje.slice(i, i + 2) === "de" &&(zinnetje.slice(i+2 , i + 3) === " ")
            &&(zinnetje.slice(i-1 , i) === " ")){
            resultaat += "het";
            i++;
        } else {
            resultaat += zinnetje[i];
        }
        i++;
    }
    console.log(resultaat);
}
window.addEventListener("load", setup);
const setup = () => {
    const familieleden = ["Jan","Piet","Pol","Dirk","Johan"];
    console.log(familieleden.length);
    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);

    const extraNaam = prompt("Geef een extra familielid op : ")
    VoegNaamToe(familieleden, extraNaam);

    console.log(familieleden.join(", "))
}
const VoegNaamToe = (array,naam) =>{
    if(naam){
        array.push(naam)
    }else{
        console.log("Geen naam ingevoerd")
    }
};
window.addEventListener("load", setup);


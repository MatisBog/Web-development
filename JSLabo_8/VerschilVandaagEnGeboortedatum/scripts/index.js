const setup = () => {
    let nu = new Date();
    let geboortedatum = new Date("2006-08-25")
    let verschil = Math.round((nu - geboortedatum)/(1000*60*60*24));
    console.log(verschil);
}


window.addEventListener("load", setup);
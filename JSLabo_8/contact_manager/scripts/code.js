let personen = [];
let indexHuidigePersoon = -1;

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let btnVerwijder = document.getElementById("btnVerwijder");
    btnVerwijder.addEventListener("click", verwijderPersoon)

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonGeselecteerdePersoon);

    updateLijst();
};
const verwijderPersoon = () =>{
    personen.splice(indexHuidigePersoon, 1);
    indexHuidigePersoon = -1;
    updateLijst();
    bewerkNieuwePersoon();
}

const toonGeselecteerdePersoon = (event) => {
    const selectedIndex = event.target.selectedIndex;
    if (selectedIndex >= 0) {
        const option = event.target.options[selectedIndex];
        indexHuidigePersoon = parseInt(option.id);
        const persoon = personen[indexHuidigePersoon];
        vulFormulierIn(persoon);
    }
};

const vulFormulierIn = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam || "";
    document.getElementById("txtFamilienaam").value = persoon.familienaam || "";
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum || "";
    document.getElementById("txtEmail").value = persoon.email || "";
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen || "";
};

const bewerkNieuwePersoon = () => {
    indexHuidigePersoon = -1;
    clearAllErrors();
    document.getElementById("lstPersonen").selectedIndex = -1;
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    document.getElementById("txtVoornaam").focus();
};

const bewaarBewerktePersoon = () => {
    valideer();

    const voornaam = document.getElementById("txtVoornaam").value.trim();
    const familienaam = document.getElementById("txtFamilienaam").value.trim();
    const geboorteDatum = document.getElementById("txtGeboorteDatum").value.trim();
    const email = document.getElementById("txtEmail").value.trim();
    const aantalKinderen = parseInt(document.getElementById("txtAantalKinderen").value.trim());

    if (indexHuidigePersoon === -1) {
        const nieuwePersoon = {
            voornaam,
            familienaam,
            geboorteDatum,
            email,
            aantalKinderen
        };
        personen.push(nieuwePersoon);
    } else {
        personen[indexHuidigePersoon] = {
            voornaam,
            familienaam,
            geboorteDatum,
            email,
            aantalKinderen
        };
    }

    updateLijst();
};

const updateLijst = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = ""; // Clear the list

    personen.forEach((persoon, index) => {
        const option = document.createElement("option");
        option.id = index;
        option.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        lstPersonen.appendChild(option);
    });

    if (indexHuidigePersoon >= 0 && indexHuidigePersoon < personen.length) {
        lstPersonen.selectedIndex = indexHuidigePersoon;
    }
};
document.addEventListener("DOMContentLoaded", setup);
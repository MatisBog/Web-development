const setup = () => {

    const gemeenten = [];
    let invoer;

    while (true) {
        invoer = prompt("Voer een gemeente in (of typ \'stop\' om te stoppen):");
        if (!invoer|| invoer.toLowerCase() === "stop") break;
        gemeenten.push(invoer);
    }

    gemeenten.sort();

    const selectElement = document.getElementById("gemeenten");
    gemeenten.forEach(gemeente => {
        const optie = document.createElement("option");
        optie.textContent = gemeente;
        selectElement.appendChild(optie);
    });
};

window.addEventListener("load", setup);
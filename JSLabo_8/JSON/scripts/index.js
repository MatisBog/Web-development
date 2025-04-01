const setup = () => {
    let student1= {
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : { // een object
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
        aantalAutos : 2
    }

    let JSONstring = JSON.stringify(student1);
    console.log(JSONstring);
    let object = JSON.parse(JSONstring);
    console.log(object.voornaam);
}

window.addEventListener("load", setup);
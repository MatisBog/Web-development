const storeSliderValues = () => {
    const sliders = {
        red: document.getElementById('sldRed').value,
        green: document.getElementById('sldGreen').value,
        blue: document.getElementById('sldBlue').value
    };

    localStorage.setItem('sliderValues', JSON.stringify(sliders));
};

const restoreSliderValues = () => {
    const JSONsliders = localStorage.getItem('sliderValues');
    if (JSONsliders) {
        const sliders = JSON.parse(JSONsliders);

        document.getElementById('sldRed').value = sliders.red;
        document.getElementById('sldGreen').value = sliders.green;
        document.getElementById('sldBlue').value = sliders.blue;
        document.getElementById('lblRed').textContent = sliders.red;
        document.getElementById('lblGreen').textContent = sliders.green;
        document.getElementById('lblBlue').textContent = sliders.blue;
    }
};

const storeSwatches = () => {
    let swatches = [];
    const swatchElements = document.querySelectorAll('#swatchComponents .swatch');

    swatchElements.forEach(swatch => {
        swatches.push({
            red: swatch.getAttribute('data-red'),
            green: swatch.getAttribute('data-green'),
            blue: swatch.getAttribute('data-blue')
        });
    });
    localStorage.setItem('swatches', JSON.stringify(swatches));
};
const restoreSwatches = () => {
    const swatchComponents = document.getElementById('swatchComponents');
    swatchComponents.innerHTML = ''; // Leeg eerst de container

    const savedSwatches = localStorage.getItem('swatches');
    if (savedSwatches) {
        const swatches = JSON.parse(savedSwatches);

        swatches.forEach(swatch => {
            addSwatchComponent(swatch.red, swatch.green, swatch.blue);
        });
    }
};

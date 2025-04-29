const global = {
    characters: ['g', 'y', 'x', 'i'],
    zoekOpdrachten: {
        'g': {
            name: 'Google',
            url: 'https://www.google.com/search?q=',
            bgColor: '#4285F4',
            textColor: 'white'
        },
        'y': {
            name: 'YouTube',
            url: 'https://www.youtube.com/results?search_query=',
            bgColor: '#FF0000',
            textColor: 'white'
        },
        'x': {
            name: 'Twitter',
            url: 'https://x.com/hashtag/',
            bgColor: '#1DA1F2',
            textColor: 'white'
        },
        'i': {
            name: 'Instagram',
            url: 'https://www.instagram.com/explore/tags/',
            bgColor: '#E1306C',
            textColor: 'white'
        }
    },
    history: []
};

const setup = () => {
    // Load history from localStorage if available
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
        global.history = JSON.parse(savedHistory);
        renderHistory();
    }

    const goButton = document.getElementById("goButton");
    goButton.addEventListener("click", zoekOpInternet);
};

const zoekOpInternet = () => {
    const input = document.getElementById("commandoBox").value.trim();
    const parts = input.split(' ');

    if (parts.length < 2 || !parts[0].startsWith('/')) {
        alert("Please enter a valid search term in the format /character searchterm");
        return;
    }

    const character = parts[0].substring(1).toLowerCase();
    const searchTerm = parts.slice(1).join(' ');

    if (!global.characters.includes(character)) {
        alert("Invalid character. Use one of: " + global.characters.join(', '));
        return;
    }

    const platform = global.zoekOpdrachten[character];
    const fullUrl = platform.url + encodeURIComponent(searchTerm);

    window.open(fullUrl, '_blank');

    // Create history object
    const historyItem = {
        title: platform.name,
        text: searchTerm,
        url: fullUrl,
        bgColor: platform.bgColor,
        textColor: platform.textColor
    };

    // Add to history array
    global.history.unshift(historyItem); // Add to beginning of array

    // Save to localStorage
    localStorage.setItem('searchHistory', JSON.stringify(global.history));

    // Render the updated history
    renderHistory();
};

const renderHistory = () => {
    const historyDiv = document.getElementById("Zoekgeschiedenis");
    historyDiv.innerHTML = ''; // Clear current history display

    // Create container for rows
    const container = document.createElement('div');
    container.className = 'container-fluid';
    historyDiv.appendChild(container);

    // Process all history items
    let currentRow;
    global.history.forEach((item, index) => {
        // Create new row every 3 items
        if (index % 3 === 0) {
            currentRow = document.createElement('div');
            currentRow.className = 'row mb-3';
            container.appendChild(currentRow);
        }

        // Create history item column
        const col = document.createElement('div');
        col.className = 'col-md-3 col-sm-6';

        // Create history item with styling
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item p-3 rounded';
        historyItem.style.backgroundColor = item.bgColor;
        historyItem.style.color = item.textColor;
        historyItem.style.border = `1px solid ${item.bgColor}`;

        // Platform title
        const platformTitle = document.createElement('h3');
        platformTitle.className = 'h5';
        platformTitle.textContent = item.title;
        historyItem.appendChild(platformTitle);

        // Search term
        const termElement = document.createElement('p');
        termElement.className = 'small mb-2';
        termElement.textContent = item.text;
        historyItem.appendChild(termElement);

        // Button to revisit
        const revisitButton = document.createElement('button');
        revisitButton.className = 'btn border-white';
        revisitButton.style.color = item.textColor;
        revisitButton.style.backgroundColor = item.bgColor;
        revisitButton.style.borderColor = item.textColor;
        revisitButton.textContent = 'Go!';
        revisitButton.addEventListener('click', () => {
            window.open(item.url, '_blank');
        });
        historyItem.appendChild(revisitButton);

        // Add to column and row
        col.appendChild(historyItem);
        currentRow.appendChild(col);
    });
};

window.addEventListener("load", setup);
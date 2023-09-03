let globalRestaurants = [];

async function fetchData(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        console.log("Response body text:", await response.text());
        throw new Error(`Error in request: ${response.status}`);
    }
    const json = await response.json();
    return json;
}

const url = "https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/restaurants";
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
};

async function getAndLogData(url, options) {
    try {
        const data = await fetchData(url, options);
        data.sort((a, b) => a.name.localeCompare(b.name));
        displayRestaurants(data);
    } catch (error) {
        console.error(error);
    }
}

const dialog = document.getElementById('info');

function displayRestaurants(restaurants) {
    globalRestaurants = restaurants;
    const table = document.querySelector("table");

    for (let i = 0; i < restaurants.length; i++) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        cell1.textContent = restaurants[i].name;
        const cell2 = row.insertCell(1);
        cell2.textContent = restaurants[i].address;
    }
}

document.querySelector("table").addEventListener("click", function(event) {
    if(event.target.tagName === 'TD' && event.target.parentNode.tagName === 'TR') {
        const highlightedRows = this.querySelectorAll(".highlight");
        highlightedRows.forEach(row => {
            row.classList.remove('highlight');
        });

        event.target.parentNode.classList.add('highlight');

        const rowIndex = Array.from(this.rows).indexOf(event.target.parentNode) - 1;
        const restaurant = globalRestaurants[rowIndex];

        populateAndShowDialog(restaurant);
    }
});

async function fetchDailyMenu(restaurantID, lang = "en") {
    const menuUrl = `https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/restaurants/daily/${restaurantID}/${lang}`;
    console.log(menuUrl);
    return fetchData(menuUrl, options);
}

async function populateAndShowDialog(restaurant) {
    dialog.innerHTML = '';

    const name = document.createElement('h2');
    name.textContent = restaurant.name;
    dialog.appendChild(name);

    const details = document.createElement('div');
    details.innerHTML = `
        <p><strong>Address:</strong> ${restaurant.address}</p>
        <p><strong>City:</strong> ${restaurant.city}</p>
        <p><strong>Postal Code:</strong> ${restaurant.postalCode}</p>
        <p><strong>Phone:</strong> ${restaurant.phone}</p>
    `;
    dialog.appendChild(details);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => dialog.close());
    dialog.appendChild(closeButton);

    try {
        const dailyMenuData = await fetchDailyMenu(restaurant._id);
        const courses = dailyMenuData.courses;

        const menuList = document.createElement('ul');
        courses.forEach(course => {
            const menuItem = document.createElement('li');
            let dishText = course.name;
            if (Array.isArray(course.diets) && course.diets.length > 0) {
                dishText += ` (${course.diets.join(', ')})`;
            }
            menuItem.textContent = dishText;
            menuList.appendChild(menuItem);
        });
        dialog.appendChild(menuList);
    } catch (error) {
        console.error("Error fetching daily menu:", error);
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "Failed to fetch the daily menu. Please try again.";
        dialog.appendChild(errorMsg);
    }

    dialog.showModal();
}




// Initiate the fetch
getAndLogData(url, options);

function attachEvents() {

    const endpoints = {
        getAllLocation: 'http://localhost:3030/jsonstore/forecaster/locations',
        getTodayData: 'http://localhost:3030/jsonstore/forecaster/today/',
        getUpcomingData: 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    }

    document.getElementById('submit').addEventListener('click', getWeather);
    const locationRef = document.getElementById('location');
    const forecastRef = document.getElementById('forecast');
    const currentRef = document.getElementById('current');
    const upcomingRef = document.getElementById('upcoming');

    async function getWeather(e) {

        try {
            clear();
            const listAllLocation = await getAllLocation();
            const userLocation = locationRef.value;
            forecastRef.style.display = 'block';

            const realLocationData = listAllLocation.find(x => x.name === userLocation);
            const dataForToday = await getDataForToday(realLocationData.code);
            const dataForNextDays = await getDataForNextDays(realLocationData.code);


            const todayDiv = fillTodayData(dataForToday);
            const nextDaysDiv = fillUpcomingData(dataForNextDays);

            currentRef.appendChild(todayDiv);
            upcomingRef.appendChild(nextDaysDiv);
        } catch {
            const divContainer = document.createElement('div');
            divContainer.classList.add('forecast');
            divContainer.textContent = 'Error';
            currentRef.appendChild(divContainer);
        }

    }

    function fillTodayData(data) {
        const degreesIcon = findIcon('Degrees');
        const tempString = `${data.forecast.low}${degreesIcon}/${data.forecast.high}${degreesIcon}`;

        const divContainer = document.createElement('div');
        divContainer.classList.add('forecast');

        const symbolSpan = generateSpan(['condition', 'symbol'], findIcon(data.forecast.condition), true);
        const spanContainer = generateSpan(['condition'], '', false);
        const spanName = generateSpan(['forecast-data'], data.name, false);
        const tempSpan = generateSpan(['forecast-data'], tempString, true);
        const conditionSpan = generateSpan(['forecast-data'], data.forecast.condition, false);
        symbolSpan.innerHTML = findIcon(data.forecast.condition);

        divContainer.appendChild(symbolSpan);
        divContainer.appendChild(spanContainer);
        spanContainer.appendChild(spanName);
        spanContainer.appendChild(tempSpan);
        spanContainer.appendChild(conditionSpan);
        return divContainer;
    }

    function fillUpcomingData(data) {
        const divContainer = document.createElement('div');
        divContainer.classList.add('forecast-info');
        data.forecast.forEach(dataForOneDay => {
            const degreesIcon = findIcon('Degrees');

            const { condition, high, low } = dataForOneDay;
            const text = `${low}${degreesIcon}/${high}${degreesIcon}`;
            const spanContainer = generateSpan(['upcoming']);
            const iconSpan = generateSpan(['symbol'], findIcon(condition).true);
            const tempSpan = generateSpan(['forecast-data'], text, true);
            const conditionSpan = generateSpan(['forecast-data'], condition, false);

            spanContainer.appendChild(iconSpan);
            spanContainer.appendChild(tempSpan);
            spanContainer.appendChild(conditionSpan);
            divContainer.appendChild(spanContainer);
        });
        return divContainer;
    }

    async function getAllLocation() {
        const responseLocation = await fetch(endpoints.getAllLocation);
        return responseLocation.json();
    }

    async function getDataForToday() {
        const response = await fetch(`${endpoints.getTodayData}${code}`);
        return response.json();
    }

    async function getDataForNextDays(code) {
        const response = await fetch(`${endpoints.getUpcomingData}${code}`);
        return response.json();
    }

    function generateSpan(classList, text, hasIcon) {
        const span = document.createElement('span');
        classList.forEach((cl) => span.classList.add(cl));
        hasIcon ? span.innerHTML = text : span.textContent = text;
        return span;
    }

    function clear() {
        upcomingRef.innerHTML = '';
        currentRef.innerHTML = '';
        locationRef = '';
    }

    function findIcon(iconName) {
        const iconEnum = {
            'Sunny': '&#x2600',
            'Partly sunny': '&#x26C5',
            'Overcast': '&#x2601',
            'Rain': '&#x2614',
            'Degrees': '&#176'
        }
        return iconEnum[iconName];
    }
}

attachEvents();
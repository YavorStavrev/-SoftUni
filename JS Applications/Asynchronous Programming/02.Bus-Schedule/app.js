const result = (function() {
    let currentStop = {
        name: 'Depot',
        next: 'depot'
    };

    async function depart() {
        try {
            const url = `http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            
            document.querySelector('#info .info').textContent = `Next stop ${data.name}`;
            currentStop = data;

            document.getElementById('depart').disabled = true;
            document.getElementById('arrive').disabled = false;
        } catch (error) {
            document.querySelector('#info .info').textContent = 'Error';
            document.getElementById('depart').disabled = true;
            document.getElementById('arrive').disabled = true;
        }
    }

    async function arrive() {
        document.querySelector('#info .info').textContent = `Arriving at ${currentStop.name}`;
        
        document.getElementById('depart').disabled = false;
        document.getElementById('arrive').disabled = true;
    }

    return {
        depart,
        arrive
    };
})();

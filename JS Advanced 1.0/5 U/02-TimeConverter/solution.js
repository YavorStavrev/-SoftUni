function attachEventsListeners() {
    const conversionRates = {
        days: {
            toHours: 24,
            toMinutes: 1440,
            toSeconds: 86400
        },
        hours: {
            toDays: 1 / 24,
            toMinutes: 60,
            toSeconds: 3600
        },
        minutes: {
            toDays: 1 / 1440,
            toHours: 1 / 60,
            toSeconds: 60
        },
        seconds: {
            toDays: 1 / 86400,
            toHours: 1 / 3600,
            toMinutes: 1 / 60
        }
    };

    function convertFromDays(days) {
        return {
            days: days,
            hours: days * conversionRates.days.toHours,
            minutes: days * conversionRates.days.toMinutes,
            seconds: days * conversionRates.days.toSeconds
        };
    }

    function convertFromHours(hours) {
        return {
            days: hours * conversionRates.hours.toDays,
            hours: hours,
            minutes: hours * conversionRates.hours.toMinutes,
            seconds: hours * conversionRates.hours.toSeconds
        };
    }

    function convertFromMinutes(minutes) {
        return {
            days: minutes * conversionRates.minutes.toDays,
            hours: minutes * conversionRates.minutes.toHours,
            minutes: minutes,
            seconds: minutes * conversionRates.minutes.toSeconds
        };
    }

    function convertFromSeconds(seconds) {
        return {
            days: seconds * conversionRates.seconds.toDays,
            hours: seconds * conversionRates.seconds.toHours,
            minutes: seconds * conversionRates.seconds.toMinutes,
            seconds: seconds
        };
    }

    function handleConvert(unit) {
        let value = Number(document.getElementById(unit).value);
        
        let converted;
        if (unit === 'days') {
            converted = convertFromDays(value);
        } else if (unit === 'hours') {
            converted = convertFromHours(value);
        } else if (unit === 'minutes') {
            converted = convertFromMinutes(value);
        } else if (unit === 'seconds') {
            converted = convertFromSeconds(value);
        }

        document.getElementById('days').value = converted.days.toFixed(2);
        document.getElementById('hours').value = converted.hours.toFixed(2);
        document.getElementById('minutes').value = converted.minutes.toFixed(2);
        document.getElementById('seconds').value = converted.seconds.toFixed(2);
    }

    document.getElementById('daysBtn').addEventListener('click', () => handleConvert('days'));
    document.getElementById('hoursBtn').addEventListener('click', () => handleConvert('hours'));
    document.getElementById('minutesBtn').addEventListener('click', () => handleConvert('minutes'));
    document.getElementById('secondsBtn').addEventListener('click', () => handleConvert('seconds'));
}

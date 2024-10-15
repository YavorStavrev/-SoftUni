function checkDistance(x1, y1, x2, y2) {
    // Helper function to calculate distance
    function calculateDistance(x, y) {
        return Math.sqrt(x * x + y * y);
    }

    // Helper function to check if distance is an integer
    function isIntegerDistance(distance) {
        return Number.isInteger(distance);
    }

    // Calculate distances
    const distance1 = calculateDistance(x1, y1);
    const distance2 = calculateDistance(x2, y2);
    const distanceBetweenPoints = calculateDistance(x2 - x1, y2 - y1);

    // Check and print if distances are valid or invalid
    if (isIntegerDistance(distance1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isIntegerDistance(distance2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isIntegerDistance(distanceBetweenPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// Example usage:
checkDistance(3, 4, 6, 8);
checkDistance(2, 3, 7, 1);

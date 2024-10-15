function generateSpiralMatrix(rows, cols) {
    // Create an empty matrix filled with zeros
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(cols).fill(0));
    }

    let top = 0,
        bottom = rows - 1,
        left = 0,
        right = cols - 1;
    let direction = 0; // 0: go right, 1: go down, 2: go left, 3: go up
    let num = 1;

    while (top <= bottom && left <= right) {
        if (direction === 0) {
            for (let i = left; i <= right; i++) {
                matrix[top][i] = num++;
            }
            top++;
        } else if (direction === 1) {
            for (let i = top; i <= bottom; i++) {
                matrix[i][right] = num++;
            }
            right--;
        } else if (direction === 2) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        } else if (direction === 3) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
        direction = (direction + 1) % 4;
    }

    // Print the matrix
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(" "));
    }
}

// Test the function with input 5, 5
generateSpiralMatrix(5, 5);

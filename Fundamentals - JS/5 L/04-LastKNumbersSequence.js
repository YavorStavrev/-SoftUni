function generateSequence(n, k) {
    let sequence = [1]; // Initialize sequence with the first element being 1
    
    for (let i = 1; i < n; i++) {
        let nextElement = 0;
        let startIndex = Math.max(0, sequence.length - k); // Ensure startIndex doesn't go below 0
        
        for (let j = startIndex; j < sequence.length; j++) {
            nextElement += sequence[j];
        }
        
        sequence.push(nextElement);
    }
    
    console.log(sequence.join(' '));
}

// Test the function with the provided input
generateSequence(6, 3);

function countPrimeNumbers() {
    let count = 0;
    
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    
    return count;
}

const startTime = performance.now();

setTimeout(() => {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
    
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
}, 0);
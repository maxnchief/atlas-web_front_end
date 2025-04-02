function countPrimeNumbers() {
    let count = 0;

    for (let num = 2; num <= 100; num++) {
        if (isPrime(num)) {
            count++;
        }
    }

    return count;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const startTime = performance.now();
const primeCount = countPrimeNumbers();
const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
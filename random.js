function getRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.round((Math.random() - .5) * 20));
    }
    console.log(numbers);

    let min = Math.min(...numbers);
    console.log(min);

    let max = Math.max(...numbers);
    console.log(max);

    let sum = numbers.reduce((a, b) => a + b, 0);
    console.log(sum);

    let result = sum / numbers.length;
    console.log(result);

    let mult = numbers.reduce((a, b) => a * b);
    console.log(mult);

}
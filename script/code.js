function displayMiddleNumber(numbers) {
    numbers.sort(function(a, b) {
      return a - b;
    });
    const middleIndex = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
      const middleNumbers = [numbers[middleIndex - 1], numbers[middleIndex]];
      console.log(`Middle Numbers: ${middleNumbers.join(', ')}`);
    } else {
      console.log(`Middle Number: ${numbers[middleIndex]}`);
    }
  }
  
  let numbers = [12, 18, 11, 5, 8, 2];
  displayMiddleNumber(numbers);
  
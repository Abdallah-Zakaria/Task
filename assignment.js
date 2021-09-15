// Solution 1
function compressionString(str) {
  let output = "";
  let repetition = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      repetition++;
    } else {
      output += str[i] + `${repetition}`;
      repetition = 1;
    }
  }
  return output;
}

console.log(compressionString("aabcccccaaa"));

// Solution 3
function uiqueList(arr){
  const uniqueItems = [];
  const storage = new Array(500);
  arr.forEach(item=>{
    const sumCharCode = item.toString().split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % 500;
    if(!storage[hashKey]){
      storage[hashKey] = [item];
      uniqueItems.push(item);
    }else{
      if(!storage[hashKey].includes(item)){
        uniqueItems.push(item);
      }
    }
  })
  return uniqueItems;
}

console.log(
  uiqueList([3, 6, 8, "tx", 3, 7,  1, 4, "tx", 6, 2, 9, 6])
);

// Solution 2
function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

function isFloat(n) {
  return n % 1 !== 0;
}

function readFiles(fileName) {
  let lines =  require(`./${fileName}`).data;
  let sumFirst2 = 0;
  let concatenationFirst3 = "";
  let primeCount = 0;
  let notPrimeCount = 0;
  let stringCount = 0;
  let invalid = 0;
  let max = 0;
  let min = 0;
  lines.forEach((item, index) => {
    console.log(
      `Line${index + 1} :`,
      item,
      ", Length :",
      item.toString().length
    );
    if (!isNaN(item) && !isFloat(item)) {
      if (item > max) max = item;
      if (min === 0) min = item;
      if (item < min) min = item;
      if (primeCount + notPrimeCount < 2) {
        sumFirst2 += item;
      }
      if (isPrime(item)) {
        console.log(item / 2);
        primeCount++;
      } else {
        console.log(item * 3.25);
        notPrimeCount++;
      }
    } else if (typeof item === "string" || isFloat(item)) {
      if (stringCount < 3) {
        concatenationFirst3 += item;
      }
      stringCount++;
    } else {
      invalid++;
    }
  });
  console.log(
    `Report => Strings: ${stringCount}, Prime: ${primeCount}, Not Prime: ${notPrimeCount}, Invalid: ${invalid}.`
  );
  console.log(`Summation of the first two integer ${sumFirst2}.`);
  console.log(
    `Concatenation of the first three strings ${concatenationFirst3}.`
  );
  console.log(`The max value is ${max} and the min value is ${min}.`);
}

readFiles('input.json');


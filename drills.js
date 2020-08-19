function urlifyString(string, char, newChar) {
  let arr = string.split(char);
  return arr.join(newChar);
}
console.log('urlifyString', urlifyString('tauhida parveen', ' ', '%20'));
console.log(
  'urlifyString',
  urlifyString('www.thinkful.com /tauh ida parv een', ' ', '%20')
);

function arrFilter(arr, value) {
  arr.sort();
  const index = arr.findIndex((i) => i >= value);
  return arr.slice(index);
}

console.log('arrFilter', arrFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

function findMaxSum(arr) {
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

console.log('findMaxSum', findMaxSum([-3, 4, 6, -3, 3, -2, 1]));

function mergeArrays(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let newArr = [];
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] === arr2[index2]) {
      newArr.push(arr1[index1]);
      index1++;
    } else if (arr1[index1] < arr2[index2]) {
      newArr.push(arr1[index1]);
      index1++;
    } else {
      newArr.push(arr2[index2]);
      index2++;
    }
  }

  if (index1 < arr1.length) {
    newArr = [...newArr, ...arr1.slice(index1)];
  } else if (index2 < arr2.length) {
    newArr = [...newArr, ...arr2.slice(index2)];
  }

  return newArr;
}

console.log('mergeArrays', mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

function removeChars(string, chars) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const checkMatch = () => {
      for (let j = 0; j < chars.length; j++) {
        if (string[i] === chars[j]) {
          return true;
        }
      }
    };
    let doesMatch = checkMatch();
    if (doesMatch !== true) {
      result += string[i];
    }
  }
  return result;
}

console.log(
  'removeChars',
  removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')
);

function notMyProduct(arr) {
  let newArr = [];
  arr.map((j) => {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product = product * arr[i];
    }
    newArr.push(product / j);
  });
  return newArr;
}

console.log('notMyProduct', notMyProduct([1, 3, 9, 4]));

function twoDArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        let pos = 0;
        arr[i].map(() => {
          arr[pos] = 0;
          pos++;
        });
        arr.map((arr) => (arr[i] = 0));
        newArr.push(arr);
      }
    }
  }
  return newArr;
}
// prettier-ignore
console.log('2DArray',twoDArray([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
]));

/*
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]
*/

function stringRotation(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let resultString = '';
  for (let i = 0; i < string2.length; i++) {
    resultString = string2.slice(-i - 1) + string2.slice(0, -i - 1);
    console.log(resultString, string1);
    if (resultString === string1) {
      return true;
    }
  }
  return false;
}

console.log(stringRotation('amazon', 'azonam'));
console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('good', 'odgo'));

const argv = require('minimist')(process.argv.slice(2));

const nums = argv?._?.filter(Number);

function sumFunc(arr) {
  if (!arr.length) return console.log('No values to process');
  const sum = arr.reduce((a, b) => a + b);
  console.log('Sum :>> ', sum);
  return sum;
}

sumFunc(nums);

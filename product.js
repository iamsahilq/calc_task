const argv = require('minimist')(process.argv.slice(2));

const nums = argv?._?.filter(Number.isFinite);

function divideFunc(arr) {
  if (!arr.length) return console.log('No values to process');
  const Value = arr.reduce((a, b) => (a * b));
  console.log('Value :>> ', Value);
  return Value;
}

divideFunc(nums);

import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
console.log('argv :>> ', argv);
const nums = argv._.filter((e) => !Number.isNaN(e)).map(Number);

// const nums = argv._;

export default function divideFunc(arr) {
  if (!arr.length) return console.log('No values to process');
  const Value = arr.reduce((a, b) => a * b);
  console.log('Value :>> ', Value);
  return Value;
}

if (require.main === module) {
  console.log('called directly');
  divideFunc(nums);
}

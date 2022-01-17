import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
console.log('argv :>> ', argv);
const nums = argv._.filter((e) => !Number.isNaN(e)).map(Number);
console.log('nums :>> ', nums);
export default function diffFunc(arr) {
  if (!arr.length) return console.log('No values to process');
  const Value = arr.reduce((a, b) => a - b);
  console.log('Diff :>> ', Value);
  return Value;
}

if (require.main === module) {
  console.log('called directly');
  diffFunc(nums);
}

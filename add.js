import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const nums = argv._.filter((e) => !Number.isNaN(e)).map(Number);

export default function sumFunc(arr) {
  if (!arr.length) return console.log('No values to process');
  const sum = arr.reduce((a, b) => a + b);
  console.log('Sum :>> ', sum);
  return sum;
}

if (require.main === module) {
  console.log('called directly');
  sumFunc(nums);
}

// Signed commit

import minimist from 'minimist';

import add from './add';
import diff from './diff';
import product from './product';
import divide from './divide';

const avlExpr = {
  divide: 'divide',
  product: 'product',
  add: 'add',
  diff: 'diff',
};

const argv = minimist(process.argv.slice(2))._;
console.log('argv :>> ', argv);

const calc = (arr) => {
  if (!arr.length) {
    throw new Error('Not enough arguments');
  }
  const expr = arr[0];
  console.log('expr :>> ', expr);
  if (!avlExpr[expr.toLowerCase()]) {
    throw new Error('Invalid Expr');
  }
  const num = arr.map(Number).filter((e) => !Number.isNaN(e));
  console.log('num :>> ', num);
  let value = 0;
  switch (expr) {
    case 'add':
      value = add(num);
      break;
    case 'diff':
      value = diff(num);
      break;
    case 'product':
      value = product(num);
      break;
    case 'divide':
      value = divide(num);
      break;
    default:
      value = 'Invalid Expr.';
      break;
  }
  return console.log('value :>> ', value);
};

calc(argv);

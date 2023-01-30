const cache = {};

function fibonacci(num) {
  if (num <= 0) return 0;
  if (num <= 2) return 1;
  if (cache[num]) return cache[num];

  const result = fibonacci(num - 1) + fibonacci(num - 2);
  cache[num] = result;
  return result;
}

const value = fibonacci(6);
console.log(value); 

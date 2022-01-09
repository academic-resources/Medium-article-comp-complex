
function constant1(n) {
  return n * 2 + 1;
}

// O(1)
function constant2(n) {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// O(log(n))
function logarithmic1(n) {
  if (n <= 1) return;
  logarithmic1(n / 2);
}

// O(log(n))
function logarithmic2(n) {
  let i = n;
  while (i > 1) {
    i /= 2;
  }
}

// O(n)
function linear1(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// O(n), where n is the length of the array
function linear2(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
  }
}

// O(n)
function linear3(n) {
  if (n === 1) return;
  linear3(n - 1);
}

// O(n * log(n))
function loglinear(n) {
  if (n <= 1) return;

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  loglinear(n / 2);
  loglinear(n / 2);
}

// O(n^2)
function quadratic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {}
  }
}

// O(n^3)
function cubic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {}
    }
  }
}

// O(2^n)
function exponential2n(n) {
  if (n === 1) return;
  exponential_2n(n - 1);
  exponential_2n(n - 1);
}

// O(3^n)
function exponential3n(n) {
  if (n === 0) return;
  exponential_3n(n - 1);
  exponential_3n(n - 1);
  exponential_3n(n - 1);
}

// O(n!)
function factorial(n) {
  if (n === 1) return;

  for (let i = 1; i <= n; i++) {
    factorial(n - 1);
  }
}

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(6);       // => 720, requires 6 calls
factorial(6);       // => 720, requires 6 calls
factorial(5);       // => 120, requires 5 calls
factorial(7);       // => 5040, requires 7 calls

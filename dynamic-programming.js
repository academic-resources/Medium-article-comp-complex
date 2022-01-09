//***********************__Memoization__*************************** */
/* 
Memoization : a design pattern used to reduce the overall number of calculations that can occur
in algorithms that use recursive strategies to solve.
MZ stores the results of the sub-problems in some other data structure, so that we can avoid
duplicate calculations and only 'solve' each problem once.
Two features that comprise memoization:
1. FUNCTION MUST BE RECURSIVE.
2. Our additional DS is usually an object (we refer to it as our memo!)
*/

//!    _____Memoizing Factorial_____

function fib(n, memo = {}) {
	if (n in memo) return memo[n]; // If we already calculated this value, return it
	if (n === 1 || n === 2) return 1;

	// Store the result in the memo first before returning
	// Make sure to pass the memo in to your calls to fib!
	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
}
function factorial(n, memo2 = {}) {
	const key = JSON.stringify(n);
	if (key in memo2) return memo2[key];
	if (n === 1) return 1;
	memo2[key] = n * factorial(n - 1, memo2);
	//console.log("this is memo", memo2);
	return memo2[key];
}

console.log(memo2);
//factorial(6); // => 720, requires 6 calls
console.log("factorial(6): ", factorial(6));
//factorial(6); // => 720, requires 1 call
//factorial(5); // => 120, requires 1 call
console.log("factorial(5): ", factorial(5));
factorial(7); // => 5040, requires 2 calls
console.log("factorial(7): ", factorial(7));
console.log("factorial(20): ", factorial(20)); // 2432902008176640000
/*
this is memo { '2': 2 }
this is memo { '2': 2, '3': 6 }
this is memo { '2': 2, '3': 6, '4': 24 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120 }
this is memo { '2': 2 }
this is memo { '2': 2, '3': 6 }
this is memo { '2': 2, '3': 6, '4': 24 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720 }
factorial(6):  720
this is memo { '2': 2 }
this is memo { '2': 2, '3': 6 }
this is memo { '2': 2, '3': 6, '4': 24 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040 }
factorial(7):  5040
*/

/*  
The Memoization Formula
Rules
1. Write the unoptimized brute force recursion (make sure it works);
2. Add memo object as an additional arugmnt .
3. Add a base case condition that returns the stored value if the function's argument is in the memo.
4. Before returning the result of the recursive case, store it in the memo as a value and make the
function's argument it's key.
!Things to remember
*1. When solving DP problems with Memoization, it is helpful to draw out the visual tree first.
*2. When you notice duplicate sub-tree's that means we can memoize.
*/
function fastFib(n, memo = {}) {
	if (n in memo) return memo[n];
	if (n === 1 || n === 2) return 1;
	memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
	return memo[n];
}
fastFib(6); // => 8
console.log("fastFib(6): ", fastFib(6)); //fastFib(6):  8
fastFib(50); // => 12586269025
console.log("fastFib(50): ", fastFib(50)); //fastFib(50):  12586269025

//***********************__Tabulation__*************************** */
/*  
Tabulation Strategy
//Use When:
-The function is iterative and not recursive.
-The accompanying Data Structure is usually an array.
*/
function fibTab(n) {
	let table = [0, 1, 1];

	// if(n === 0 || n === 1){
	//    return 1;
	// }

	while (table.length - 1 < n) {
		table.push(table[table.length - 1] + table[table.length - 2]);
	}

	return table[n];
}

console.log(fibTab(1)); //1
console.log(fibTab(2)); //1
console.log(fibTab(3)); //2
console.log(fibTab(4)); //3
console.log(fibTab(5)); //5
console.log(fibTab(50)); //12586269025

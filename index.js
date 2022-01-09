/**************************************BIG-O***********************************/
/***********************Common Algorithms for Analysis********************/
//mdn Object;
//-**************-recursive factorial:*********************/
/* 
Factorial: the product of a given positive integer multiplied by all lesser positive integers:
The quantity four factorial (4!) = 4 ⋅ 3 ⋅ 2 ⋅ 1 = 24. 
Symbol:n!, where n is the given integer.
 */
function factorial(n) {
	if (n === 1) return 1; //* Base Case ... 1 * 1 = 1
	return n * factorial(n - 1); //*  n! = n * (n-1) *  (n-2) * (n-3) * ... * 1
}
factorial(5); //*5 * 4 * 3 * 2 * 1 = 120 <----expected
//console.log( "factorial(5): ", factorial( 5 ) ); //-    factorial(5):  120
/* 
Fibonacci numbers are the numbers such that every number in the series after the first two is the sum of the two preceding ones.
The series starts with 1, 1. Example −1, 1, 2, 3, 5, 8, 13, 21, 34, ….
Mathematical Expression: fib(n) = fib(n−1) + fib(n−2) 
! fib-tree-structure-diagram.png
https://miro.medium.com/max/700/1*svQ784qk1hvBE3iz7VGGgQ.jpeg
 */
function fibonacci(n) {
	if (n === 1 || n === 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(5);
//console.log("fib(5): ", fibonacci(5)); //-  fib(5):  5
/*
the major differences between tabulation and memoization are:
1.)     tabulation has to look through the entire search space; memoization does not
2.)     tabulation requires careful ordering of the subproblems is; memoization doesn’t care much about the order of recursive calls.
*/
const memo = {
	0: 0,
	1: 0,
	2: 1,
};
const fib = (n) => {
	if (memo[n] !== undefined) return memo[n];
	const n1 = fib(n - 1);
	const n2 = fib(n - 2);
	memo[n] = fib(n - 1) + fib(n - 2);
	return memo[n];
};
//console.log("fib(50): ", fib(20));      //-  fib(50):  4181
/******************End of Common Algorithms for Analysis*****************/
/***********Comparing two functions that calculate the sum of all numbers from 1 up to n**********************/
function addUpTo(n) {
	let total = 0;
	for (let i = 0; i <= n; i++) {
		//! Number of operations will grow with input n.
		total += i;
	}
	return total;
}
addUpTo(4);
//console.log("addUpTo( 4 ): ", addUpTo(4)); //-  addUpTo( 4 ):  10
//! Would be O(n) or Linear Time.
//----------------------------------------------------------------



/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */

export function pow(x, n) {
  return x ** n;
}

/**
 *  Возвращает сумму чисел от 1 до n включительно
 *
 * @param {number} n От 1 до которого вычисляется сумма, должно быть натуральным числом
 * @return {number} n Сумму чисел от 1 до n.
 */

export function sumTo(n) {
  return n != 0 ? n + sumTo(n - 1) : 0;
}

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
export function isLeapYear(n) {
    return (n % 400 === 0) || (n % 4 === 0 && n % 100 !== 0);
}

export function factorial(n) {
  return BigInt(n) != 0 ? BigInt(n) * BigInt(factorial(n - 1)) : 1n;
}

export function fib(n) {
    let a = 1n;
    let b = 1n;
    if (n == 0n) {
        return 0n;
    }
    else {
        for (let i = 3n; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

export function compare(x) {
  return function (y) {
    return y > x ? true : y < x ? false : null;
  };
}

export function sum(...args) {
  return args.reduce((acc, a) => acc + a, 0);
}

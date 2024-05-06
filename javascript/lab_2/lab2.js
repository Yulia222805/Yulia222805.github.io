/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
  return x ** n;
}

/**
 *  Возвращает сумму чисел от 1 до n включительно
 *  Рекурсивно считает сумму чисел от 1 до n включительно.
 *
 * @param {number} n Число, до которого вычисляется сумма, должно быть натуральным числом
 * @return {number} Сумму чисел от 1 до n.
 */
function sumTo(n) {
  return n != 0 ? n + sumTo(n - 1) : 0;
}

/**
 * Проверяет, является ли год високосным.
 *
 * @param {number} n Год, который нужно проверить, должно быть натуральным числом
 * @return {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(n) {
    return (n % 400 === 0) || (n % 4 === 0 && n % 100 !== 0);
}

/**
 * Вызвращает факториал числа n!.
 *
 * @param {number} n Число, для которого вычисляется факториал, должно быть натуральным числом
 * @return {number} факториал числа n!.
 */
function factorial(n) {
  return n != 0 ? BigInt(n) * BigInt(factorial(n - 1)) : 1n;
}

/**
 * Вызвращает n-е число Фибоначчи.
 *
 * @param {number} n Порядковый номер числа Фибоначчи, должен быть натуральным числом.
 * @return {number} b, n-е число Фибоначчи
 */
function fib(n) {
    let a = 1n;
    let b = 1n;
    if (n == 0n) {
        return 0n;
    }
    for (let i = 3n; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/**
 * Возвращает результат сравнения значений y и x.
 * @param {number} x Первый аргумент, должен быть целым числом.
 * @param {number} y Второй аргумент, должен быть целым числом.
 * @return {function} Анонимную функцию, которая сравнивает переданное значение с x и возвращает 
 *                    true, если переданное значение больше x,
 *                    false, если переданное значение меньше x, 
 *                    null, если значения равны.
 */
function compare(x) {
  return function (y) {
    return y > x ? true : y < x ? false : null;
  };
}

/**
 * Возвращает сумму всех своих аргументов.
 * @param {...number} args Значения аргументов для сложения.
 * @return {number} сумму всех своих аргументов.
 */
function sum(...args) {
  return args.reduce((sum, elem) => sum + elem, 0);
}

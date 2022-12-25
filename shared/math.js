
/** Compute `n % m` without negative numbers. */
const mod = (n, m) => ((n % m) + m) % m;

/** Compute the greatest common denominator of two numbers. */
const gcd = (a, b) => !b ? a : gcd(b, a % b);
/** Compute the least common multiple of two numbers. */
const lcm = (a, b) => (a * b) / gcd(a, b);
/** Compute the least common multiple of an array of numbers. */
const lcmList = (list) => list.reduce((a, b) => lcm(a, b), 1);


module.exports = {
  mod,
  gcd, lcm, lcmList
};
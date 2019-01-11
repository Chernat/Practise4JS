var mul = multiA(4);
var mul2 = multiA(3);

console.log(mul(2));
console.log(mul2(8));

function multiA(a) {
  return function (b) {
    return a * b;
  }
}

var a = callFanction();

console.log(a());
console.log(a());
console.log(a());
console.log(a());

function callFanction() {
  var call = 1;
  return function () {
    return ++call;
  }
}

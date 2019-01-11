var a = callFanctionObject();
var b = callFanctionObject();

console.log(a.counter());
console.log(a.counter());
console.log(a.counter());
console.log(a.counter());

console.log(b.counter());
console.log(b.counter());

function callFanctionObject() {
  var call = 1;
  return {
    counter: function () {
      return call++;
    }
  }
}

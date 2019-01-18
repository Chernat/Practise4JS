var password = comparePassword('123');

function comparePassword(pass) {
  var counter = 1;

  return function (enterUserPass) {
    if (counter > 5) {
      return console.log('Вы исчперпали число попыток');
    } else {
      if (enterUserPass === pass) {
        counter = 1;
        return true;
      } else {
        counter++;
        return false;
      }
    }
  }
}

console.log(password('1234'));
console.log(password('1234'));
console.log(password('1234'));
console.log(password('1234'));
console.log(password('123'));
console.log(password('1234'));

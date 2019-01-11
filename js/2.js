console.log(comparePassword());

function comparePassword() {
  var pass = prompt('Введите пароль','');
  var validPass = '123';

  for (var i = 1; i < 5; i++) {
    if (pass !== validPass) {
      console.log('Неверный пароль. Осталось ' + (5 - i) + ' попытки');
      pass = prompt('Введите пароль еще раз','');
      if (i === 4) {
        console.log('Вы исчерпали все попытки')
        return false;
      }
    } else {
      return true;
    }
  }
}

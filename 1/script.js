
/*function fun1() {
var chbox;
chbox = document.getElementById('one');

if (chbox.checked) {
  alert('выбран');
}
else {
  alert('не выбран');
}
}*/
//содержит массив элементов радиобатн
// перебираем в цикле массив
//если радиобатн чекнутый
//выводим данные этого элемента
function fun1() {
  var radi = document.getElementsByName('r1');
  for (var i = 0 ; i < radi.length; i++) {
    if (radi[i].checked) {
      alert('выбран' +i+ 'элемент');
    }
  }
}

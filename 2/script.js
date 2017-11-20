/*function fun1() {
  var sel = document.getElementById('mySelect').selectedIndex;
  var options = document.getElementById('mySelect').options;
  alert ('Выбрана' + options[sel].text);
}*/

function fun1() {
  var rng=document.getElementById('r1');
  var div=document.getElementById('test');//var i1=document.getElementById('i1'); //var p=document.getElementById('one');
  div.style.width=rng.value+'px'          //i1.value=rng.value;                //p.innerHTML=rng.value;
}

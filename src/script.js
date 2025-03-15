'use scrict'

//num1
function isEmpty(obj) {
    if (Object.keys(obj) == ''){
        return true;
    } else {
        return false;
    }
}

//num2
// 1) "" + 1 + 0 будет 10
// 2) "" - 1 + 0 будет -1
// 3) true + false будет 1
// 4) 6 / "3" будет 2
// 5) "2" * "3" будет 6
// 6) 4 + 5 + "px" будет 45px
// 7) "$" + 4 + 5 будет $45
// 8) "4" - 2 будет 2
// 9) "4px" - 2 будет NaN
// 10) "   -9  " + 5 будет   -9  5 (пробелы сохранятся)
// 11) "   -9  " - 5 будет -14
// 12) null + 1 будет 1
// 13) underfined + 1 будет NaN 
// 14) "\t \n" - 2 будет -2

//num3
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );
  

//num4
// 1) alert( null || 2 || undefined ); будет 2
// 2) alert( alert(1) || 2 || alert(3) ); будет 2
// 3) alert( 1 && null && 2 ); будет null (первое ложное значение)
// 4) alert( alert(1) && alert(2) ); будет undefined
// 5) alert( null || 2 && 3 || 4 ); будет 3

//num5

if (!(age >= 14 && age <= 90)){
    console.log('Age not in 14..90')
}
if (age < 14 || age > 90){
    console.log('Age not in 14..90')
}

//num6
     //Наверное дело в плавающей запятой, можно попробовать такой способ, 
     // но на некоторых значениях он все равно не будет работать
     Math.round(6.35 * 10)/10 
//num7
function truncate(str, maxlength){
    if (str.length > maxlength){
        var newStr = str.slice(0, maxlength - 3) + "...";
        return newStr;    
    } else {
        return str;
    }
}


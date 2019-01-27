function calc() {
    var param1 = document.getElementById("param1").value;
    var param2 = document.getElementById("param2").value;
    var operand = document.getElementById("operation").value;
    // var result = 0;
    // switch(operand){
    //     case "+":
    //         result  = +param1 + +param2;
    //         break;
    //     case "*":
    //         result = param1 * param2;
    //         break;
    //     case "-":
    //         result = param1 - param2;
    //         break;
    //     case "/":
    //         result = param1 / param2
    //         break;
    //
    // }
    //var result = +param1 + +param2;
    var result = eval(param1 + operand + param2);
    document.getElementById("result").innerHTML = result;
}
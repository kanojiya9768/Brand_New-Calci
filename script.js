function getnumber(num){
    document.getElementById('result').value += num;
}

function calculate(){
    var result = document.getElementById('result').value;

    var X = eval(result);
    document.getElementById('result').value = X;
}


function dlt(){
    let result = document.getElementById('result');

    result.value = result.value.slice(0,-1);
}
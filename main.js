const result = document.getElementById('result');

function appendValue(value){
    result.value += value;
}
function toggleSign(){
    if(result.value.startWith('-')){
        result.value = result.value.slice(1);
    } else{
        result.value = '-' + result.value;
    }
}
function percent(){
    result.value = parseFloat( result.value) / 100;
}
function clearResult (){
    result.value = "";
}
function calculateResult (){
    try{
        result.value = eval(result.value);
    }catch(error){
        result.value = 'Err'
    }
}
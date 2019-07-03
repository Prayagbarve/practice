var array = [2,21,29,39,9,7,8,9];
var arrayLenght = array.length
for (i= 0; i < arrayLenght; i++){
   var  arraySingleValue = array[i]%9; 
    console.log(arraySingleValue);
    if (arraySingleValue === 0){
        array[i]=parseInt(array[i]);
        array[i] = array[i]/10;
    }

}
console.log(array);
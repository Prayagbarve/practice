

// var arr = [2,21,29,39,9,7,8,9];
// len = arr.length
// for (i= 0; i < len; i++){
//    var  a = arr[i]%9; 
//     console.log(a);
//     if (a === 0){
//         arr[i] = a;
//     }

// }
// console.log(arr);

// var arr = [2,21,29,39,9,7,8,9];
// len = arr.length;
// console.log('Before Array -> ',arr)
// for (i=0; i<len; i++){
//     if (arr[i]===9){
//         arr[i] = arr[i+1] ;

//     }
// }
// console.log('After Array -> ',arr)

var array = [2, 21, 29, 3, 9, 9, 7, 8, 9];
arrayLenght = array.length;
console.log('Before Array -> ', array)
for (i = 0; i < arrayLenght; i++) {
  let num = JSON.stringify(array[i]);
    for (j = 0; j < num.length; j++) {
        
        if (num[j] === "9") {
            array[i]=array[i]%9;
            
            console.log(array[i], typeof (array[i]));
        }
        // num = num[j];
        // console.log("-------",num[j], typeof (num[j]));
    }

    // console.log("--->>", arr)    
}
console.log('After Array -> ', array)


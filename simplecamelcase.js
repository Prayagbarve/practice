// var a = ["5","4","3"];
// console.log(typeof(a));
// for(i=0; i<a.length; i++){
//     console.log(a[i]);
// }



var b = "input_data_out";
for (i = 0; i < b.length; i++) {
    if ("_" === b[i]) {
        console.log('')
        b = b.replace(/_/g, "");
        let c = i + 1;
        let item = b[i];
        
        console.log("b ---", b[i], i)
        console.log("c --", b[i].toUpperCase());


    }

}
console.log(b);
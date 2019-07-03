// camelcase of removing special character and number
let inputData = "prayag-barve1indore";
let camelCaseStr = ""
for(let i=0;i<inputData.length;i++){
    let singleChar = inputData[i];
    console.log('Single Character ---> ',singleChar)
    if(singleChar + '\n' >= 'A' && singleChar + '\n' <= 'Z' ){
        camelCaseStr += inputData[i];
    }
        if(singleChar >= 'a' && singleChar <= 'z' ){
            camelCaseStr += inputData[i];
        // }
    }else{
        inputData += "";
        let upperCase = inputData[i+1].toUpperCase();
        console.log('Upper Case ---> ',upperCase);
        camelCaseStr += upperCase;
        i++;
    }

}

console.log('String ---> ',inputData)
console.log('camelCase ---> ',camelCaseStr)


// camelcase for removing special character
// console.log('String ---> ',inputData)
// console.log('camelCase ---> ',camelCaseStr)
// let inputData = "shubham_s_sharma";
// let camelCaseStr = ""
// for(let i=0;i<inputData.length;i++){
//     let singleChar = inputData[i];
//     console.log('Single Character ---> ',singleChar)
//     if(singleChar === '_'){
//         inputData += "";
//         let upperCase =  inputData[i+1].toUpperCase();
//         console.log('Upper Case ---> ',upperCase)
//         camelCaseStr += upperCase
//         i++;
//     }else{
//         camelCaseStr += inputData[i];
//     }

// }

// console.log('String ---> ',inputData)
// console.log('camelCase ---> ',camelCaseStr)

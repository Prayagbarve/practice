// Take input and convert string into camelcase
 
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
standard_input.on('data', function (inputData) {

    // User input exit.
    if (inputData === 'exit\n') {
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        // Print user input in console.
        console.log('User Input Data : ' + inputData);
        console.log(givenString(inputData));
    }
});

// program for remove all special characters from a string
function givenString(inputData) {
    let camelCaseStr = ""
    var specialCharacter = "~`!@#$%^&*()_+=-[]'/?>" ;
    for (let i = 0; i < inputData.length-1; i++) {
        let singleChar = inputData[i];
        console.log("I value ----", i);
        for (let j =0 ; j < specialCharacter.length; j++){
        if (singleChar  === specialCharacter[j]) {
            console.log("iiii------",i);
            console.log("j--->", specialCharacter[j])
            inputData += "";
            console.log("input data ---", inputData[i]);
            let upperCase = inputData[i + 1].toUpperCase();
            console.log('Upper Case ---> ', upperCase);
            camelCaseStr += upperCase;
            console.log("---", camelCaseStr);
            i = i+2;
            console.log("i+2", inputData[i+2])
            } 
            else{
                inputData[i] = inputData[i];
            }
        }
        console.log("camelCaseStr ----", camelCaseStr, inputData[i] );
        camelCaseStr += inputData[i];   
        
        }
    console.log('String ---> ', inputData)
    console.log('camelCase ---> ', camelCaseStr)
}


// program for remove special character and numbers from string
//  function givenString(inputData) {
//     let camelCaseStr = ""
//     console.log("input ---", inputData.length);
//     for (let i = 0; i < inputData.length-1; i++) {
//         let singleChar = inputData[i];
//         console.log('Single Character ---> ', singleChar)
//         if (singleChar + '\n' >= 'A' && singleChar + '\n' <= 'Z') {
//             camelCaseStr += inputData[i];
//         }
//         if (singleChar >= 'a' && singleChar <= 'z') {
//             camelCaseStr += inputData[i];
//             // }
//         } else {
//             inputData += "";
//             console.log("input data ---", inputData[i]);
//             let upperCase = inputData[i + 1].toUpperCase();
//             console.log('Upper Case ---> ', upperCase);
//             camelCaseStr += upperCase;
//             i++;
//         }

//     }

//     console.log('String ---> ', inputData)
//     console.log('camelCase ---> ', camelCaseStr)
// }


// function givenString(inputData) {
//     let camelCaseStr = ""
//     for(let i=0;i<inputData.length;i++){
//         let singleChar = inputData[i];
//         console.log('Single Character ---> ',singleChar)
//         if(singleChar >= 'A' && singleChar <= 'Z' ){
//             inputData += "";
//             let upperCase =  inputData[i+1].toUpperCase();
//             console.log('Upper Case ---> ',upperCase)
//             camelCaseStr += upperCase
//             i++;
//         }else{
//             camelCaseStr += inputData[i];
//         }

//     }

//     console.log('String ---> ',inputData)
//     console.log('camelCase ---> ',camelCaseStr)
//     }




// for remove specific special character
// function givenString(inputData) {
// let camelCaseStr = ""
// for(let i=0;i<inputData.length;i++){
//     let singleChar = inputData[i];
//     console.log('Single Character ---> ',singleChar)
//     if(singleChar === '_'|| singleChar === '@' ){
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
// }
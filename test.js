// Get process.stdin as the standard input object.
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
        console.log(removeAGivenNumber(inputData));
    }
});

function removeAGivenNumber(numberToBeRemoved) {
    var array = [1, 2, 5, 9, 59, 89, 99, 199, 299, 919];
     arrayIndividualNumberInStr = array + "";
    let arrayIndividualNumberInStrLength = arrayIndividualNumberInStr.length;
    let tempNumberInStr = "";
                for (let i = 0; i < arrayIndividualNumberInStrLength&&(arrayIndividualNumberInStr[i] >= 0 && arrayIndividualNumberInStr[i] <=9); i++) {
                    let element = arrayIndividualNumberInStr[i];
                   
                    let numberInString = numberToBeRemoved+"";
                    if (arrayIndividualNumberInStr[i]+'\n' == numberInString) {
                        tempNumberInStr += 0;
                        array[i] = tempNumberInStr;   
                    } else {
                        tempNumberInStr += arrayIndividualNumberInStr[i];
                        array[i] = tempNumberInStr;   
                    }
                    
        }
    
    return array;
};








































// function removeAGivenNumber(numberToBeRemoved) {
//     var array = [1, 2, 5, 9, 59, 89, 99, 199, 299, 919];
//     let arrayIndividualNumberInStr = array + "";
//     let arrayIndividualNumberInStrLength = arrayIndividualNumberInStr.length;
//     let tempNumberInStr = "";
//                 for (let i = 0; i < arrayIndividualNumberInStrLength; i++) {
//                     let numberInString = numberToBeRemoved+"";
//                     if (arrayIndividualNumberInStr[i]+'\n' == numberInString) {
//                         tempNumberInStr += 0;
//                         arrayIndividualNumberInStr[i] = tempNumberInStr;   
//                     } else {
//                         tempNumberInStr += arrayIndividualNumberInStr[i];
//                         arrayIndividualNumberInStr[i] = tempNumberInStr;   
//                     }
                    
//         }
    
//     return array;
// };



































// function removeAGivenNumber(numberToBeRemoved) {
//     var array = [1, 2, 5, 9, 59, 89, 99, 199, 299, 919];
//     for (i=0; i< array.length; i++) {
//         let arrayIndividualNumber = array[i];
//         if (arrayIndividualNumber+'\n' === numberToBeRemoved) {
//             array[i] = 0;
//         } else {
//             let arrayIndividualNumberInStr = array[i] + "";
//             let arrayIndividualNumberInStrLength = arrayIndividualNumberInStr.length;
//             if (arrayIndividualNumberInStrLength > 1) {
//                 let tempNumberInStr = "";
//                 for (let i = 0; i < arrayIndividualNumberInStrLength; i++) {
//                     let numberInString = numberToBeRemoved+"";
//                     if (arrayIndividualNumberInStr[i]+'\n' == numberInString) {
//                         tempNumberInStr += 0;
//                     } else {
//                         tempNumberInStr += arrayIndividualNumberInStr[i];
//                     }
//                 }
//                 array[i] = tempNumberInStr;
//              }
//         }
//     }
//     return array;
// };

















// function removeAGivenNumber(numberToBeRemoved) {
//     console.log(" numberToBeRemoved --> ", numberToBeRemoved);
//     console.log("type of numberToBeRemoved--->", typeof numberToBeRemoved)
//     var array = [1, 2, 5, 9, 59, 89, 99, 199, 299, 919];
//     var arrayLength = array.length;
//     console.log('Before Array -> ', array)
//     let array2= [];
//     let len = 0;
//     array.forEach(element => {
//         let arrayIndividualNumber = element;
//         if (arrayIndividualNumber+'\n' === numberToBeRemoved) {
//             console.log("first if is running or not", arrayIndividualNumber);
//             element = 0;
//             array2[len] = element;
//             len++
//         } else {
//             let arrayIndividualNumberInStr = element + "";
//             let arrayIndividualNumberInStrLength = arrayIndividualNumberInStr.length;
//             console.log('Length ',arrayIndividualNumberInStrLength)
//             if (arrayIndividualNumberInStrLength > 1) {
//                 console.log('arrayIndividualNumberInStr ---> ', arrayIndividualNumberInStr)
//                 let tempNumberInStr = "";
//                 for (let i = 0; i < arrayIndividualNumberInStrLength; i++) {
//                     let numberInString = numberToBeRemoved+"";
//                     console.log('arrayIndividualNumberInStr[i] ',arrayIndividualNumberInStr[i], ' numberInString  ',numberInString)
//                     console.log("arrayIndividualNumberInStr[i] == numberInString ",arrayIndividualNumberInStr[i] == numberInString)
//                     if (arrayIndividualNumberInStr[i]+'\n' == numberInString) {
//                         tempNumberInStr += 0;
//                         console.log('arrayIndividualNumberInStr == numberToBeRemoved', tempNumberInStr)
//                     } else {
//                         tempNumberInStr += arrayIndividualNumberInStr[i];
//                         console.log('arrayIndividualNumberInStr != numberToBeRemoved', tempNumberInStr)
//                     }
//                 }
//                 element = tempNumberInStr;
//                 array2[len] = element;
//                 len++
                    
//                 console.log('element ====> ', element)
//             }
//         }
//     });

//     console.log('After Array -> ', array2)
// };


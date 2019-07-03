

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



// function removeAGivenNumber(numberToBeRemoved) {
//     console.log(" numberToBeRemoved --> ", numberToBeRemoved);
//     console.log("type of numberToBeRemoved--->", typeof numberToBeRemoved)
//     var array = [1, 2, 5, 9, 59, 89, 99, 199, 299, 919];
//     array = [JSON.stringify(array)];
//     console.log('Before Array -> ', array)
//     for (i = 0; i < array.length; i++) {
//         console.log("loop--->",array[i]);

//         // if (array.length >= 1) {
//         //     console.log("arrayIndividualNumber ---> ", array);

//                 if (array[i] + '\n' === numberToBeRemoved) {
//                     console.log("arrayIndividualNumber---[j]>", array[i]);

//                     array[i] = 0;

//                 }
//                 // num = num[j];
//                 // console.log("-------",num[j], typeof (num[j]));

//         } //else {
//         //     if (array[i] === numberToBeRemoved) {
//         //         console.log(array[i]);
//         //         array[i] = 0;
//         //         console.log(array[i], typeof (array[i]));
//         //     }
//         // }
//     // }
//     console.log('After Array -> ', array)
// };




























function removeAGivenNumber(numberToBeRemoved) {
    console.log("numberToBeRemoved --> ", numberToBeRemoved);
    var array = [1, 2, 5, 9, 59, 89, 99, 199, 299, 919];
    var arrayLength = array.length;
    for (i = 0; i < arrayLength; i++) {
        let arrayIndividualNumber = JSON.stringify(array[i]);
        if (arrayIndividualNumber.length >= 1) {
            for (j = 0; j < arrayIndividualNumber.length; j++) {
                if (arrayIndividualNumber[j] + '\n' === numberToBeRemoved) {
                    array[i] = 0;
                }
            }
        } else {
            if (arrayIndividualNumber[j] === numberToBeRemoved) {
                array[i] = 0;
            }
        }
    }
    return array;
}







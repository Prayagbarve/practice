

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
    console.log(" numberToBeRemoved --> ", numberToBeRemoved);
    console.log("type of numberToBeRemoved--->", typeof numberToBeRemoved)
    var array = [1,2,5,9,59,89,99,199,299,919];
    var arrayLength = array.length;
    console.log('Before Array -> ', array)
    for (i = 0; i < arrayLength; i++) {
        let arrayIndividualNumber = JSON.stringify(array[i]);
        
        console.log(typeof arrayIndividualNumber);
        if (arrayIndividualNumber.length >= 1) {
            console.log("arrayIndividualNumber ---> ",arrayIndividualNumber);
            for (j = 0; j<arrayIndividualNumber.length ; j++) {
                console.log('inside for loop ---',arrayIndividualNumber[j]);
                if (arrayIndividualNumber[j]+'\n' === numberToBeRemoved) {
                    console.log("arrayIndividualNumber---[j]>",arrayIndividualNumber[j]);
                    array[i] = array[i] % numberToBeRemoved;
                    console.log(array[i], typeof (array[i]));
                }
                
                // num = num[j];
                // console.log("-------",num[j], typeof (num[j]));
            }
        } else {
            if (arrayIndividualNumber[j] === numberToBeRemoved) {
                console.log(arrayIndividualNumber[j]);
                array[i] = 0;
                console.log(array[i], typeof (array[i]));
            }
         }

         
    }
    console.log('After Array -> ', array)


};

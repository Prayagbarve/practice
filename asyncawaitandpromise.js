//Async function using promise
function function1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("succesfull");
       return resolve('resolved');
      }, 2000);
    });
  }
  
  async function function2() {
    
    var a = function1()
    a.then(function(result){
    console.log(result);
  })
    // expected output: 'resolved'
    console.log('calling');
  }
  
  function2();

//  Sync function using async await
  function function1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("succesfull");
       return resolve('resolved');
      }, 2000);
    });
  }
  
  async function function2() {
    
    var result = await function1
    console.log(result);
     // expected output: 'resolved'
    console.log('calling');
  }
  
  function2();
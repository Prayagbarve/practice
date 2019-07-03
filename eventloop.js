// eventlooping of functions
const function1 = () =>{ 
    setTimeout(()=>{
        console.log('function1')
    },5)
}
const function2 = () => {
    setTimeout(() => {
        console.log('function2') 
    }, 2);
}
const function3 = () => {
  console.log('function3')
  function1()
  function2()
}
function3()






const helloTimeOut = () => {
const word = '4311o th3r3 w0r1d'
const splittedWord = word.split(" ")
let counter = 1
for(const each of splittedWord){
  setTimeout(() => { 
    (console.log (each) )
  }, 500 * counter)
  counter++;
}
}
helloTimeOut()
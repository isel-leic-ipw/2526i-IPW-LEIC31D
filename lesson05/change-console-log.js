console.log("SLB", {a: 1}, 123)



// (function () {
//   const oldConsoleLog = console.log

//   console.log = function console(...args) {
//     return oldConsoleLog.apply(this, [new Date(), ...args])
//   }
// })()


{
  const oldConsoleLog = console.log

  console.log = function console(...args) {
    return oldConsoleLog.apply(this, [new Date(), ...args])
    //return oldConsoleLog.apply(this, [new Date()].concat(args))
  }
}


// let a = [1,2,3]

// let b = [4, a]  => [4, [1,2,3]]
// let b = [4, ...a]  => [4,1,2,3]

// [4].concat(b)

console.log("SLB", {a: 1}, 123)  //  => [2024-09-23T17:26:01.032Z]: SLB { a: 1 } 123



function add(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN
    }
    return a + b;
}

console.log(add(2,3))
console.log(add("a", "4"))
console.log(add(true, true))
console.log(add([1,2], [3,4]))
console.log(add({a:1}, {b:2}))
console.log(add())
console.log(add(2))
console.log(add(2,3,4,5,6))




function addAll(...args) {
    let sum = 0
    for(let i = 0; i < args.length; ++i) {
        if(Number.isInteger(args[i])) {
            sum += args[i]
        }
    }
        
    return sum
}

console.log("--------")
console.log(addAll(3))
console.log(addAll(3,3))
console.log(addAll("SLB",2))
console.log(addAll(1,2,3,4,5,6,7,8))

// console.log(add)


// function add(a, b) {
//     console.log(add.someProperty)
//     if(Number(a) && Number(b)) 
//         return a + b
// }



// console.log(add(2,3))
// console.log(add(2, [1,2,3]))

// console.log(2/0)


// add.someProperty = "SLB"

// console.log(add.someProperty)

// let c = add

// c()

// let o = {
//     p1: add
// }

// console.log(o.p1())



// let sayHello = function () {
//     console.log("SLB")
// }

// sayHello.a = "Benfica"

// sayHello.sayAgain = function() {
//     console.log("Another SLB")
// }

// sayHello().sayAgain()


// sayHello.o = {
//     f: function() {}
//}

// let ret = sayHello()

// console.log(ret)
// sayHello()
// sayHello.sayAgain()



// // Function with return value
// function getHello() {
//     return "Glorioso"
// }

// console.log(getHello)
// console.log(getHello())

// let f1 = getHello
// console.log(f1())


// // Functions with arguments

function times(a, b) {
    return a*b
}


// console.log(times(2,3))
// console.log(times(2,"SLB"))
// console.log(times(2))
// console.log(times())
// console.log(times(3,2,3,4,5))



// console.log(times(1,9))
// console.log(times(2,9))
// console.log(times(3,9))
// console.log(times(4,9))
// console.log(times(5,9))
// console.log(times(6,9))
// console.log(times(7,9))
// console.log(times(8,9))
// console.log(times(9,9))

// function multiplier(b) {
//     return function (a) {
//         return a * b
//     }
// }

// let nineMult = multiplier(9)
// console.log(nineMult(1))
// console.log(nineMult(1))
// console.log(nineMult(2))
// console.log(nineMult(3))
// console.log(nineMult(4))
// console.log(nineMult(5))
// console.log(nineMult(6))
// console.log(nineMult(7))
// console.log(nineMult(8))
// console.log(nineMult(9))


// let sevenMult = multiplier(7)

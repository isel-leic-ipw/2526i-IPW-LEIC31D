
function f(callMeBack) {
    let ret =  callMeBack(123, "ABC")
    return ret
}


const cb2 = (n, str) => cb(n, str)

const r1 = f((n, str) => console.log(n, str) )
const r2 = f((a, b) => cb(b, b))
const r3 = f(cb)

function cb(n, str) {
    console.log(n, str)
}
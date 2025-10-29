import {getObj} from './module.mjs'

//import {myFetch as fetch} from './myFetch.mjs'

console.log("main module")


showObj()

setTimeout(showObj, 1000 )


function showObj() {
    getObj().then(obj => console.log(`obj from module in main code ${obj}`))
}






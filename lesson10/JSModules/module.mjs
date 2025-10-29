import { readFile } from 'fs/promises'

const FILE_PATH = './test.json'

console.log("module code")


let obj;

export function getObj() {
    if(obj)
        return Promise.resolve(obj)
    return setObj().then(o => obj = o)
}

async function setObj() {
    return readFile(FILE_PATH).then(
        buffer => JSON.parse(buffer.toString())
    )
}


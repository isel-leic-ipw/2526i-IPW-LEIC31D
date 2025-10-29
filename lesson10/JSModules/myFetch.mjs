import { readFileSync } from 'fs'
import { readFile } from 'fs/promises'

const FILE_PATH = './test.json'

let cache = await getCache()

async function getCache() {
    return readFile(FILE_PATH).then(
        buffer => JSON.parse(buffer.toString())
    )
}

export function myFetch(resource, options) {
    if(cache[resource]) {
        return Promise.resolve(cache[resource])
    }
    //...

}

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});


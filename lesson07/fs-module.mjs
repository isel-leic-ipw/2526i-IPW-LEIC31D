

import { readFile, writeFile } from 'node:fs/promises'

const INPUT_FILE_NAME = './team211.json'
const OUTPUT_FILE_NAME = './out.json'

// readFile(FILE_NAME)          // Promise<Buffer>
//     .then(extractTeamInfo)            // Promise<Object>
//     .then(printTeamInfo)            // Promise<Object>
//     .then(writeToFile)              // Promise<undefined>
//     .then(confirmFileWrittenWithSuccess)    // Promise<undefined>
//     .catch(processError)
 

try {
    const buffer = await readFile(INPUT_FILE_NAME)          // Promise<Buffer>
    let obj = extractTeamInfo(buffer)            // Promise<Object>
    obj = printTeamInfo(obj)            // Promise<Object>
    await writeToFile(obj)             // Promise<undefined>
    confirmFileWrittenWithSuccess()    // Promise<undefined>
} catch(e) {
    processError(e)
}


console.log("END")

// Processing functions


    function extractTeamInfo(buffer) {

        return JSON.parse(buffer.toString())
    }

    function printTeamInfo(data) {
        console.log("Team Name:",data.response[0].team.name)
        console.log("Venue Name:",data.response[0].venue.name)

        return data
    }

    



// (Obj) -> Promise<undefined>
function writeToFile(obj) {
    console.log(`########`, obj)
    const strTeam = JSON.stringify(obj.response[0].team)
    console.log(`File content wil be: \n${strTeam}`)

    return writeFile(
        OUTPUT_FILE_NAME, 
        strTeam
    )
}


function confirmFileWrittenWithSuccess() {
    console.log(`File ${OUTPUT_FILE_NAME} created with success`)
}


function processError(e) {
    console.log("An error occurred")
    console.log(e)

}



    

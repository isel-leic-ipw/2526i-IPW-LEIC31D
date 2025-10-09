
// fetch("http://www.isel.pt")         // Promise<Response>
//     .then(rsp => rsp.text())        // Promise<String>
//     .then(txt => console.log(txt))


// fetch('https://api.chucknorris.io/jokes/random')
//     // .then(res => res.text())
//     // .then(txt => console.log(JSON.parse(txt).value))
//     .then(res => res.json())
//     .then(obj => console.log(obj.value))


// // //https://httpbin.org/delay/t
// function printGetWithDelay(t){
//     return fetch('https://httpbin.org/delay/' + t) 
//         .then(resp => resp.json()) 
//         .then(body => console.log(body))
// }

//printGetWithDelay(1)

// function printGoodJokes(){
//     return fetch("https://api.sampleapis.com/jokes/goodJokes") 
//         .then(resp => {
//             console.log(resp.status)
//             return resp.json()
//         }) 
//         .then(data => console.log(data))
// }

// //printGoodJokes()

function getTeam(){

    const headers = {
            headers: {
              'X-Auth-Token': '657ed758c354445ea4f0f3960caddb36', 
               Accept: 'application/json'
            }
        };
    const url = "http://api.football-data.org/v4/competitions/PPL/teams"

    return fetch(url, headers)                           // Promise<Response>
        // then(resp => resp.text())  // Promise<String>>
        // then(printTeamInfoStr)     // Promise<Object>
        .then(resp => resp.json())  // Promise<Object>>
        .then(printTeamsInfo)
        .then(writeTeamInfoToFile)


        function printTeamInfoStr(str) {
            console.log(str)
            var o = JSON.parse(str)
            return o
        }

        function printTeamsInfo(data) {
            const teams = data.teams.map( t => `${t.name}: ${t.founded}`)
            console.log("Team Names:", teams)
            return teams
        }
}

getTeam()
     .then(()=>console.log("Done"))
    


function cb(n, str) {
    console.log(n, str)
    return n
}



// const json = ' {"name":"Filipe" , "text" : "txt" }'
// const parsed = JSON.parse(json)
// const inString = JSON.stringify(parsed)
// console.log(parsed)
// console.log(inString)
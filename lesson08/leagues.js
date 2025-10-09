const leagues = [
     "PPL", 
     "ELC" , 
     "PL"
]

function main() {
    const promises = leagues.map(team => getLeagueTeams(team)) 
    Promise.all(promises)
        .then(printAllTeams)

    function printAllTeams(teamsArr) {
        teamsArr.forEach(printTeamsInfo)        

    }
}

main()



function getLeagueTeams(leagueName) { // Promise<String[]>
    const headers = {
            headers: {
              'X-Auth-Token': '657ed758c354445ea4f0f3960caddb36', 
               Accept: 'application/json'
            }
        };
    const url = `http://api.football-data.org/v4/competitions/${leagueName}/teams`

    return fetch(url, headers)
            .then(rsp => rsp.json())
            .then(extractTeamInfo)

      
    function extractTeamInfo(data) {
            const teams = data.teams.map( t => `${t.name}: ${t.founded}`)
            return teams
        }
}


function printTeamsInfo(teams) {
        console.log("Team Names:", teams)
        return teams
    }


    console.log("END")
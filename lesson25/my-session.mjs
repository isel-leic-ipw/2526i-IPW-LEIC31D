
import crypto from 'crypto'

const SESSIONS = {
}

const SESSION_COOKIE = "_session_"
export default function() {
    return function(req, rsp, next) {
        let sessionId = req.cookies[SESSION_COOKIE]
        let session = getSession(sessionId)
        req.session = session.data
        if(!SESSIONS[sessionId])
            rsp.cookie(SESSION_COOKIE, session.id)
        console.log("----------------------")
        console.log(req.path)
        //console.log(SESSIONS)

        next()
    }


    function getSession(sessionId) {
        let session = SESSIONS[sessionId]
        if(session == undefined) {
            session = {
                id: crypto.randomUUID(),
                data: {  }
                
            }
            let id = session.id
            session.data.clearSession = function(rsp) {
                delete SESSIONS[id]
                rsp.clearCookie(SESSION_COOKIE)
            }

            SESSIONS[session.id] = session
        }
        return session
    }
}
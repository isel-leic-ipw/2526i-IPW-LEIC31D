import express from 'express'
import mySession from './my-session.mjs'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())
app.use(mySession())
app.use(showCounters)
app.get('/home', home);
app.get('/', root);




function home(req, rsp) {
    incCounters(req.session, "home", "global")
    
    // req.session.home = req.session.home ? req.session.home + 1 : 1;
    // req.session.global = req.session.global ? req.session.global + 1 : 1;

    rsp.send("Hello world from home")
}



function root(req, rsp) {
    incCounters(req.session, "root", "global")
    if(req.session.root >= 5) {
        req.session.clearSession(rsp)
    }
    rsp.send("Hello world from root")
}

function incCounters(obj, ...counterNames) {
    counterNames.forEach( counterName =>  obj[counterName] = (obj[counterName] || 0) + 1)
}

function showCounters(req, rsp, next) {
    next()
    console.log(req.session)    
}

const PORT = 1904
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}/`))

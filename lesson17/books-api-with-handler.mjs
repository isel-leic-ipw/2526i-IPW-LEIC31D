import * as services from './books.services.mjs'



export const getBooks = authenticationHandler(getBooksInternal)
export const getBook = authenticationHandler(getBookInternal)
export const createBook = authenticationHandler(createBookInternal)
export const deleteBook = authenticationHandler(deleteBookInternal)
export const updateBook = authenticationHandler(updateBookInternal)


function authenticationHandler(handler) {
    return function (req, rsp) {
        console.log("authenticationHandler")
        var token = verifyToken(req, rsp)
        if(!token)
            return
        req.token = token
        handler(req, rsp)
    }
}

function getToken(req) {
    const auth = req.get("Authorization")
    if(!auth)
        return ""
    const arr = auth.split(" ")
    if(arr.length != 2 && arr[0].toLower() != "bearer")
        return ""
    return arr[1]
}

function verifyToken(req, rsp) {
    const token = getToken(req)
    if(token == "") {
        return rsp
                .status(403)
                .send({uri: req.path, description: "The access to the resource is forbidden"})
        
    }
    return token
}


function getBooksInternal(req, rsp) {
    services.getBooks(req.token)
        .then(books => { 
            console.log("getBooks response generated"); 
            rsp.json(books)
        })
}

function createBookInternal(req, rsp) {
    rsp.send(`Create book called`)
}

function getBookInternal(req, rsp) {
    services.getBook(req.params.bookId, req.token)
        .then(book => rsp.json(book))
}
 
function deleteBookInternal(req, rsp) {
    let bookId = req.params.bookId
    let idx = BOOKS.findIndex(b => bookId == b.id)
    BOOKS.splice(idx, 1)
    rsp.json({
        status: `Book with id ${bookId} deleted`
    })
}

function updateBookInternal(req, rsp) {
    rsp.send(`Update book with id ${req.params.bookId} called`)
}
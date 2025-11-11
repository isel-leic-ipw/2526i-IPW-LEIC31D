import * as services from './books.services.mjs'



export const getBooks = getBooksInternal
export const getBook = getBookInternal
export const createBook = createBookInternal
export const deleteBook = deleteBookInternal
export const updateBook = updateBookInternal


function getToken(req) {
    const auth = req.get("Authorization")
    if(!auth)
        return ""
    const arr = auth.split(" ")
    console.log(arr)
    if(arr.length != 2 || arr[0].toLowerCase() != "bearer")
        return ""
    return arr[1]
}

export function verifyToken(req, rsp, next) {
    const token = getToken(req)
    if(token == "") {
        return rsp
                .status(403)
                .send({uri: req.path, description: "The access to the resource is forbidden"})
        
    }
    req.token = token
    next()
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
import * as services from './books.services.mjs'

function getToken(req) {
    const auth = req.get("Authorization")
    if(!auth)
        return ""
    const arr = auth.split(" ")
    if(arr.length != 2 && arr[0].toLower() != "bearer")
        return ""
    return arr[1]
}


export function getBooks(req, rsp) {
    const token = getToken(req)
    if(token == "") {
        return rsp
                .status(403)
                .send({uri: req.path, description: "The access to the resource is forbidden"})
        
    }

    services.getBooks()
        .then(books => rsp.json(books))
}

export function createBook(req, rsp) {
    rsp.send(`Create book called`)
}

export function getBook(req, rsp) {
    const token = getToken(req)

    services.getBook(req.params.bookId, token)
        .then(book => rsp.json(book))
}
 
export function deleteBook(req, rsp) {
    let bookId = req.params.bookId
    let idx = BOOKS.findIndex(b => bookId == b.id)
    BOOKS.splice(idx, 1)
    rsp.json({
        status: `Book with id ${bookId} deleted`
    })
}

export function updateBook(req, rsp) {
    rsp.send(`Update book with id ${req.params.bookId} called`)
}
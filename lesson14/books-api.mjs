import * as services from './books.services.mjs'


export function getBooks(req, rsp) {
    services.getBooks()
        .then(books => rsp.json(books))
}

export function createBook(req, rsp) {
    rsp.send(`Create book called`)
}

export function getBook(req, rsp) {
    let book = BOOKS.find(b => req.params.bookId == b.id)
    rsp.json(book)

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
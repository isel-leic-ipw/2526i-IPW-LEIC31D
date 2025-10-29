let nextId = 0

function Book(title, isbn) {
    this.id  = ++nextId
    this.title = title
    this.isbn = isbn
    this.ownerId = 0
}

const BOOKS = [
    new Book("Book1", "1111"),
    new Book("Book2", "2222"),
    new Book("Book3", "3333"),
]
    


export function getBooks(req, rsp) {
    rsp.set("Content-Type", "application/json")
    rsp.send(JSON.stringify(BOOKS))
    //rsp.json(BOOKS)
    
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
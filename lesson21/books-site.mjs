
import appToHttp from './application-to-http-erros.mjs'

import express from 'express'

const ALL_BOOKS = '/books'
const BOOK = '/books/:bookId'
const BOOK_CREATE = '/books/new'


export default function (services) {

    const api = {
        getBooks: getBooksInternal,
        getBook: getBookInternal,
        createBook:  createBookInternal,
        deleteBook: deleteBookInternal,
        updateBook:  updateBookInternal,
        bookCreator:  bookCreatorInternal
    }

    const router = express.Router()
    router.use(insertDummyToken)
    router.get(ALL_BOOKS, api.getBooks)
    router.post(ALL_BOOKS, api.createBook)
    router.get(BOOK, api.getBook)
    router.put(BOOK, api.updateBook)
    router.delete(BOOK, api.deleteBook)

    return router


    function getBooksInternal(req, rsp) {
        services.getBooks(req.token)
            .then(books => { 
                rsp.render('books', { username: "dummy", books: books} )
            })
    }


    function bookCreatorInternal(req, rsp) {
        rsp.render('createBook')
    }

    function createBookInternal(req, rsp) {
        rsp.send(`Create book called`)
    }

    function getBookInternal(req, rsp) {
        services.getBook(req.params.bookId, req.token)
            .then(book => 
                rsp.send(bookToHtml(book))
            )
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


    function insertDummyToken(req, rsp, next) {
        req.token = 'c176eafd-25eb-45d3-a8cb-7218f3d63b3b'
        next()
    }



    function bookToHtml(book) {
        return `
            <html>
                <head>
                </head>
                <body>
                    <h1>Book Details</h1>
                    <h2>${book.title}</h2>
                </body>

            </html>
        `
    }
}

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
    router.get(BOOK_CREATE, api.bookCreator)

    return router


    function getBooksInternal(req, rsp) {
        services.getBooks(req.token)
            .then(books => { 
                rsp.render('books', { username: null, books: books} )
            })
    }


    function bookCreatorInternal(req, rsp) {
        //rsp.render('newBook')
        rsp.send(`Book creator called`)
    }

    function createBookInternal(req, rsp) {
        rsp.send(`Create book called`)
    }

    function getBookInternal(req, rsp) {
        services.getBook(req.params.bookId, req.token)
            .then(book => 
                rsp.render('book', book)
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
}

import appToHttp from './application-to-http-erros.mjs'

import express from 'express'

const ALL_BOOKS = '/books'
const BOOK = '/books/:bookId'
const BOOK_CREATE = '/books/new'


export default function (services) {

    const site = {
        getBooks: getBooksInternal,
        getBook: getBookInternal,
        deleteBook: deleteBookInternal,
        updateBook:  updateBookInternal,
        createBook:  createBookInternal,
        bookCreator:  bookCreatorInternal
    }

    const router = express.Router()
    router.use(insertDummyToken)
    router.get(ALL_BOOKS, site.getBooks)
    router.post(ALL_BOOKS, site.createBook)
    router.get(BOOK_CREATE, site.bookCreator),
    router.get(BOOK, site.getBook)
    router.put(BOOK, site.updateBook)
    router.delete(BOOK, site.deleteBook)

    return router


    function getBooksInternal(req, rsp) {
        services.getBooks(req.token)
            .then(books => { 
                rsp.render('books', { username: null, books: books} )
            })
    }


    function bookCreatorInternal(req, rsp) {
        rsp.render('newBook')
    }

    function createBookInternal(req, rsp) {
        //services.createBook(req.query)
        
        rsp.redirect('.')

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
        console.log("insertDummyToken")
        next()
    }
}
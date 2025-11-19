import express from 'express'

import api from '/module-resolver.mjs'

const app = express()

const ALL_BOOKS = '/api/books'
const BOOK = '/api/books/:bookId'


function callMe(req, rsp, next) {
    console.log("I've been called")
    next()
    console.log("I've been called after next")
}

app.use(verifyToken)
app.get(ALL_BOOKS, api.getBooks)
app.post(ALL_BOOKS, api.createBook)

app.get(BOOK, api.getBook)
app.put(BOOK, api.updateBook)
app.delete(BOOK, api.deleteBook)

 
const PORT = 1904
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))




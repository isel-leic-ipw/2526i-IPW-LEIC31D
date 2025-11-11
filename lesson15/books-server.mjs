import express from 'express'
import { getBooks, getBook, deleteBook, updateBook, createBook } from './books-api.mjs'

const app = express()

const ALL_BOOKS = '/api/books'
const BOOK = '/api/books/:bookId'


app.get(ALL_BOOKS, getBooks)
app.post(ALL_BOOKS, createBook)

app.get(BOOK, getBook)
app.put(BOOK, updateBook)
app.delete(BOOK, deleteBook)

 
const PORT = 1904
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))




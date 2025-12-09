/**
 * Implements all Books data access, stored in memory 
 */

import errors from '../errors.mjs'

function Book(title, isbn, ownerId, id = "") {
    this.id = id
    this.title = title
    this.isbn = isbn
    this.ownerId = ownerId
}




const INDEX_URI = 'http://localhost:9200/books/'

export function getBooks(userId) {
    return fetch(`${INDEX_URI}'_search?q=userId:${userId}`)
        .then(res => res.json())
        .then(mapElasticToBooks)

        function mapElasticToBooks(elasticResult)  {
            return elasticResult.hits.hits.map(
                h => new Book(h._source.title, h._source.isbn, h._source.userId, h._id)
            )
        }
    }
}

export function createBook(bookCreator, userId) {
    const newBook = new Book(bookCreator.title, bookCreator.isbn, userId)
    BOOKS.push(newBook)
    return Promise.resolve(newBook)
}

export function getBook(bookId) {
    const book = BOOKS.find(b => b.id == bookId)
    if(book) {
        return Promise.resolve(book)
    }
    return Promise.reject(errors.NOT_FOUND(`Book with id ${bookId} not found`))
}

export function updateBook(bookId, bookUpdater, userId) {
    const book = BOOKS.find(b => b.id == bookId)
    if(book) {
        book.title = bookUpdater.title
        book.isbn = bookUpdater.isbn
        return Promise.resolve(book)
    }
    return Promise.reject(errors.NOT_FOUND(`Book with id ${bookId} not found`))
}

export function deleteBook(bookId) {
    const idxToRemove = BOOKS.findIndex(b => b.id == bookId)
    if(idxToRemove != -1) {
        BOOKS.splice(idxToRemove, 1)
        return Promise.resolve(bookId)
    }
    return Promise.reject(errors.NOT_FOUND(`Book with id ${bookId} not found`))
}




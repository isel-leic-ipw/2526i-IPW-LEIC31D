import * as users from './data/users-data-mem.mjs'
import erros from './errors.mjs'


export default function (data, users) {
    return {
        getBooks: getBooks,
        getBook: getBook
    }

    async function getBooks(token) {
    return data.getBooks()
}

async function getBook(bookId, token) {
    
    return data.getBook(bookId)
        .then(book => users.convertTokenToId(token)
            .then(id => validateOwner(book, id))
        )
    
    function validateOwner(book, userId) {
        if(book.ownerId == userId) {
            return book
        }
        return Promise.reject(errors.NOT_AUTHORIZED(`The user does not have access to the book with id ${bookId}`))
    }      
}
}


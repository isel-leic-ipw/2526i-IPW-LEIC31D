import booksData from './mock-impl/fake-books-mem.mjs'
import usersData from './data/users-data-elastic.mjs'
import booksServicesInit from './books.services.mjs'

const services = booksServicesInit(booksData, usersData)



it("test1", function() {
    const books = services.getBooks()
})
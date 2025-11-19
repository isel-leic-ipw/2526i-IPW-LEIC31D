import booksData from './data/books-data-mem.mjs'
import usersData from './data/users-data-elastic.mjs'
import booksServicesInit from './books.services.mjs'
import booksApiInit from './books-api.mjs'

const services = booksServicesInit(booksData, usersData)
export const api = booksApiInit(services)


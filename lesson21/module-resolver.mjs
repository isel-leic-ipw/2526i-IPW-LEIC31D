import * as booksData from './data/books-data-mem.mjs'
import * as usersData from './data/users-data-mem.mjs'
import booksServicesInit from './books.services.mjs'
import booksApiInit from './books-api.mjs'
import booksSiteInit from './books-site.mjs'

const services = booksServicesInit(booksData, usersData)

export const apiRouter = booksApiInit(services)
export const siteRouter = booksSiteInit(services)


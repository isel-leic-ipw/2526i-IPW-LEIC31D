import { Book } from './domain-model.mjs'

const INITIAL_BOOKS = 10

let nextId = 4

const BOOKS = [
    new Book(1, "Book1", "1111"),
    new Book(2, "Book2", "2222"),
    new Book(3, "Book3", "3333"),
]



export function getBooks() {
    return Promise.resolve(BOOKS)
}
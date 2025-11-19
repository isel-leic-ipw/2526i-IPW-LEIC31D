import { Book } from './domain-model.mjs'

const INITIAL_BOOKS = 10

let nextId = 4

//const USERS = new Array(10).fill(0, 0, 10).map((_, i) => new User(i+1, `user${i+1}`))

const USERS = 
[
    new User(1, "User1", "81ddadbe-ef69-49ec-9ed1-82c0ea6fe145"),
    new User(2, "User2", "81ddadbe-ef69-49ec-9ed1-82c0ea6fe146"),
    new User(3, "User3", "81ddadbe-ef69-49ec-9ed1-82c0ea6fe147"),


]



export function getBooks() {
    return Promise.resolve(BOOKS)
}
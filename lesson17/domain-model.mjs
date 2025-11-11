
export function Book(id, title, isbn) {
    this.title = title
    this.isbn = isbn
    this.ownerId = 0
}


export function User(id, username, email, userToken) {
    this.id = id
    this.username = username
    this.userToken = userToken || crypto.randomUUID()
}



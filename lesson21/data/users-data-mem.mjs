/**
 * Implements all Books data access, stored in memory 
 */

import errors from '../errors.mjs'


let idNextUser = 0

function User(name, email, token = crypto.randomUUID()) {
    this.id = ++idNextUser
    this.name = name
    this.email = email
    this.userToken = token 
}

const USERS = [
    new User("User1", "User1@isel.pt", "c176eafd-25eb-45d3-a8cb-7218f3d63b3b"),
    new User("User2", "User2@isel.pt", "3efa8c5d-a9f4-4d71-be2d-8d9347e540c0"),
] 


export function convertTokenToId(userToken) {
    const user = USERS.find(u => u.userToken == userToken)
    if(!user) {
        return Promise.reject(errors.NOT_FOUND(`User with token ${userToken} not found`));
    } 
    return Promise.resolve(user.id)

}
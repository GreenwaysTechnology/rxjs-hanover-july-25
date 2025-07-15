import { from } from "rxjs"

function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject('Login Failed')
    }
}
function getPromise() {
    return from(login('admin', 'admin'))
 // return from(login('xxx','yyyy'))
}

function main() {
    getPromise().subscribe({
        next: value => {
            console.log('Got', value)
        },
        error: err => {
            console.log(`Got Err:  ${err}`)
        },
        complete: () => {
            console.log('Completed')
        }
    })

}
main()
import { from } from "rxjs"

function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            resolve('login success')
        } else {
            reject('login failed')
        }
    })
}
function getPromise() {
    // return from(login('admin', 'admin'))
    return from(login('xxx','yyyy'))
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
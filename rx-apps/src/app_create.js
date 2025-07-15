import { Observable } from "rxjs"

function main() {
    const stream = Observable.create(observer => {
        observer.next(1)
        observer.next(2)
        observer.complete()
    })
    stream.subscribe({
        //listeners
        next: value => {
            console.log(`Got ${value}`)
        },
        error: err => {
            console.log(`Got ${err}`)
        },
        complete: () => {
            console.log('Completed')
        }
    })
}
main()
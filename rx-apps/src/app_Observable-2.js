import { Observable } from "rxjs";


function main() {

    //Producer
    const observable = new Observable(subscriber => {
        //emit event - data
        subscriber.next('Hello')
        subscriber.next('Rxjs')
        subscriber.error(new Error('Something went wrong!'))
        //emit complete event
        subscriber.complete()
    })
    //subscriber
    observable.subscribe({
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
import { fromEvent, interval, throttleTime } from 'rxjs'

function main() {
    fromEvent(document, 'click').pipe(
        throttleTime(1000)
    ).subscribe({
        next: (evt) => {
            console.log(evt)
        },
        error: (err) => {
            console.log(err)
        },
        complete: () => {
            console.log('done')
        }
    })
}
main()
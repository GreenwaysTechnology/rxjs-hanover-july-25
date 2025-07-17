import { fromEvent, takeUntil, timer, throwIfEmpty } from 'rxjs'

function main() {
    fromEvent(document, 'click').pipe(
        takeUntil(timer(1000)),  //listen for 1 sec
        throwIfEmpty(() => new Error('No Clicks within 1 sec')),
    ).subscribe({
        next: (va) => {
            console.log(va) //never be called
        },
        error: (err) => {
            console.log(err)
        },
        complete: () => {
            console.log('done') // called when done
        }
    })
}
main()
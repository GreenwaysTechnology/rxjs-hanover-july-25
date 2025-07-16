import { fromEvent, of, race, timer } from "rxjs"

function main() {

    //keydown event binding
    const userCancel = fromEvent(document, 'keydown')
    const autoCancel = timer(5000) //system cancels
    race(userCancel, autoCancel).subscribe(val => {
        if (typeof val === 'number') {
            console.log('Auto cancelled')
        } else {
            console.log('Cancelled by user')
        }
    })

}
main()
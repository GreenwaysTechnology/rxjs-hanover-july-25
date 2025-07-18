import { delay, delayWhen, filter, from, fromEvent, interval, map, of, tap } from 'rxjs'

//delay each click by random time
function main() {
    const clicks = fromEvent(document, 'click')
    clicks.pipe(
        delayWhen(() => {
            return interval(Math.random() * 5000)
        })
    ).subscribe(e => console.log('Delayed clicks', e))
}
main()
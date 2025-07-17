import { concatMap, fromEvent, interval, take } from 'rxjs'

function main() {
    const clicks = fromEvent(document, 'click')
    clicks.pipe(
        concatMap(() => interval(1000).pipe(take(4))) // emits 0-3 every second
    ).subscribe(val => console.log(val))
}
main()
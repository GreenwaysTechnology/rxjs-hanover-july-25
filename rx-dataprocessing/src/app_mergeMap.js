import { fromEvent, interval, mergeMap } from 'rxjs'

function main() {
    const clicks = fromEvent(document, 'click')
    clicks.pipe(
        mergeMap(() => interval(1000))
    ).subscribe(val => console.log(val))
}
main()
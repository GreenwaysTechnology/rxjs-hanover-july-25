import { fromEvent, interval, switchMap } from 'rxjs'

function main() {
    const clicks = fromEvent(document, 'click')
    clicks.pipe(
        switchMap(() => interval(1000)) //starts new interval(obs) on each click
    ).subscribe(val=>console.log(val))
}
main()
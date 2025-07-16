import { fromEvent, interval,take,window,map, mergeAll } from "rxjs"

function main() {
    const clicks = fromEvent(document, 'click')
    const boundaries = interval(5000) //emits every 5 secs

    const windowed = clicks.pipe(
        window(boundaries), // create new window every 5 secs
        map(win=>win.pipe(take(2))),//take at most 2 clicks per window
        mergeAll() //flatten the inner observables
    )
    windowed.subscribe(val => console.log(val.x))
}
main()
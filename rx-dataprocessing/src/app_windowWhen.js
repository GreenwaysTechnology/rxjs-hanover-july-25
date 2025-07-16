import { fromEvent, interval, mergeAll, windowToggle, windowWhen} from "rxjs"

function main() {
    const source = interval(1000)

    const windowed = source.pipe(
        windowWhen(()=>interval(5000)), //close the window every 5 secs
        mergeAll()
    )
    windowed.subscribe(value => console.log(value))
}
main()
import { fromEvent, interval, mergeAll, windowToggle} from "rxjs"

function main() {
    const source = fromEvent(document,'click') 
    const openings = interval(5000) //open a window every 5 secs
    const closingSelector = ()=>interval(2000) //close the window after 2 secs

    const windowed = source.pipe(
        windowToggle(openings,closingSelector), // each window gets 3 values(obsverable)
        mergeAll()
    )
    windowed.subscribe(value => console.log(value))
}
main()
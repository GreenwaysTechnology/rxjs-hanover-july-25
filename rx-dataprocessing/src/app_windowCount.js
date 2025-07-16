import { interval, mergeAll, windowCount } from "rxjs"

function main() {
    const source = interval(1000)
    const windowed = source.pipe(
        windowCount(5), // each window gets 3 values(obsverable)
        mergeAll()
    )
    windowed.subscribe(value => console.log(value))
}
main()
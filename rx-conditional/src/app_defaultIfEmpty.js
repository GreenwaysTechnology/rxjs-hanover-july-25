import { defaultIfEmpty, filter, from } from "rxjs"

function main() {
    from([1, 2, 3, 4, 5, 6, 7]).pipe(
        filter(x => x > 10),
        defaultIfEmpty("No Matching Items")
    ).subscribe(val => console.log(val))
}
main()
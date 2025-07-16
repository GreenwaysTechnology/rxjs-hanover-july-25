import { mapTo, of } from "rxjs"
function main() {
    of(1, 2, 3).pipe(
        mapTo('Clicked')
    ).subscribe(val => console.log(val))
}
main()
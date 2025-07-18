import { delay, filter, map, of, tap } from 'rxjs'

function main() {
    of(1, 2, 3, 4, 5).pipe(
        delay(1000)
    ).subscribe(val => {
        console.log(val)
     })
}
main()
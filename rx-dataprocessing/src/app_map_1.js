import { map, of } from 'rxjs'
function main() {
    of(1, 2, 3, 4, 5)
        .pipe(
            map(x => x * 2)
        )
        .subscribe(val => console.log(val))
}
main()
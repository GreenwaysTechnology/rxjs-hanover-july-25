import { of, scan } from 'rxjs'

function main() {
    const numbers = of(1, 2, 3)
    numbers.pipe(
        scan((total, current) => total + current, 0)
    ).subscribe(val => console.log(val))
}
main()
import { of, zip } from "rxjs"

function main() {
    const numbers = of(1, 2, 3, 4, 5)
    const characters = of('A', 'B', 'C', 'D', 'E')
    zip(numbers, characters).subscribe(val => console.log(val))
}
main()
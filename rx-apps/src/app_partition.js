import { of, partition } from "rxjs"

function main() {

    const numbers = of(1, 2, 3, 4, 5, 6, 7)
    const [evens, odds] = partition(numbers, n => n % 2 === 0)
    evens.subscribe(value => console.log(`Even Numbers ${value}`))
    odds.subscribe(value => console.log(`Odd Numbers ${value}`))

}
main()
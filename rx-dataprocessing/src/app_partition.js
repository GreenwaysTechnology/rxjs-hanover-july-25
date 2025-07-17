import { of, partition } from 'rxjs'
function main() {

    const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    const [evenNumbers, oddNumbers] = partition(source, value => value % 2 === 0)
    evenNumbers.subscribe(val => console.log('Even :', val))
    oddNumbers.subscribe(val => console.log('Odd :', val))
}
main()
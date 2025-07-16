import { of, race } from "rxjs"

function main() {
    const first = of('first')
    const second = of('Second')
    race(first,second).subscribe(val=>console.log(`Winner : ${val}`))
}
main()
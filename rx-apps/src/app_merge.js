import { merge, of } from "rxjs"

function main() {

    const characters = of('A', 'B')
    const numbers = of(1, 2, 3)
    merge(characters,numbers).subscribe(val=>console.log(val))

}
main()
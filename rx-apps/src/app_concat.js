import { concat, of } from "rxjs"
function main() {
    const first = of('A', 'B')
    const second = of('C', 'D')
    concat(first, second).subscribe(val => console.log(val))
}
main()
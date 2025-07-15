import { combineLatest, of } from "rxjs"
function main() {
    const price = of(1000)
    const qty = of(2)
    combineLatest([price, qty]).subscribe(value => console.log(value[0] * value[1]))
}
main()
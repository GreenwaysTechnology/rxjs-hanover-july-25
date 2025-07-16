import { interval, zip } from "rxjs"

function main() {
    const numbers1 = interval(1000)
    const numbers2 = interval(1000)
    zip(numbers1, numbers2).subscribe(val => console.log(val))
}
main()
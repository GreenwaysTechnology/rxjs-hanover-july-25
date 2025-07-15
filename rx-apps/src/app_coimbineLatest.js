import { combineLatest, interval } from "rxjs"
function main() {
    const obs1 = interval(1000)
    const obs2 = interval(500)
    combineLatest([obs1, obs2]).subscribe(value => console.log(value))
}
main()
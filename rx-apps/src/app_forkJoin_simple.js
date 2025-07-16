import { forkJoin, of } from "rxjs"

function main() {

    const obs1 = of('A')
    const obs2 = of('B')
    forkJoin([obs1, obs2]).subscribe(([value1, value2]) => {
        console.log(`Value1 ${value1} Value2 ${value2}`)
    })

}
main()
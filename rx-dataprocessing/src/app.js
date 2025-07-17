import { interval, pairwise } from 'rxjs'

function main() {
    interval(1000).pipe(
        pairwise()
    ).subscribe(([pre, curr]) => {
        console.log(`Previous Value ${pre} Current Value ${curr}`)
    })
}
main()
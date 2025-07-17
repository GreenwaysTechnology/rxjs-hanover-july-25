import { catchError, map, of } from 'rxjs'

function main() {
    of(1, 2, 3, 4, 5, 6).pipe(
        map(n => {
            if (n === 4) {
                throw 'something went wrong'
            }
            return n
        }),
        catchError(() => {
            return of('A', 'B', 'C') // fallback response
        })
    ).subscribe({
        next: (val) => console.log('value', val),
        error: (err) => console.log('error', err),
        complete: () => console.log('complete')
    })
}
main()
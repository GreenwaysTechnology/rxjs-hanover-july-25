import { catchError, interval, mergeMap, of, retry, throwError } from 'rxjs'

function main() {
    interval(1000).pipe(
        mergeMap(val => val > 5 ? throwError(() => 'Error') : of(val)),
        retry(2),
        catchError(() => of('fallback'))
    ).subscribe({
        next: (val) => console.log('value', val),
        error: (err) => console.log('error', err),
        complete: () => console.log('complete')
    })
}
main()
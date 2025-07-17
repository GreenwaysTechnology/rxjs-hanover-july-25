import { delay, throwError, timer,retry } from 'rxjs'

function main() {
    throwError(() => new Error('Boom!'))
        .pipe(
            retry(errors =>
                errors.pipe(delayWhen(() => timer(2000))) // retry after 2s
            )
        )
        .subscribe({
            next: val => console.log('Next:', val),
            error: err => console.log('Final Error:', err.message),
        });


}
main()
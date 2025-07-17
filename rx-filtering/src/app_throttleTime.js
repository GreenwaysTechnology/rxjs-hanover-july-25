import { interval, throttleTime } from 'rxjs'

function main() {
    interval(1000).pipe(
        throttleTime(1000)
    ).subscribe({
        next: (value) => {
            console.log(value)
        },
        error:(err)=>{
            console.log(err)
        },
        complete:()=>{
            console.log('done')
        }
    })
}
main()
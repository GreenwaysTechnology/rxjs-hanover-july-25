import { Observable } from "rxjs";

function getUserStream() {

    return new Observable(subscriber => {
        const userIds = [101, 102, 103, 104, 105]
        let index = 0
        const intervalId = setInterval(() => {
            if (index >= userIds.length) {
                //once all items are completed
                subscriber.complete()
                clearInterval(intervalId)
                return;
            }
            const id = userIds[index++];
            const latency = Math.floor(Math.random() * 1500) + 500 // 500 to 2000 ms
            console.log(`Loading...Delay ${latency}ms`)
            setTimeout(() => {
                //simulate error - 20%
                if (Math.random() < 0.2) {
                    const err = new Error(`Oops Something went wrong for ${id}`)
                    subscriber.error(err)
                    clearInterval(intervalId)
                } else {
                    subscriber.next(`Fetched User ID : ${id}`)
                }
            }, latency)


        }, 1000); //emit every 1 second
    })

}

function main() {
    getUserStream().subscribe({
        //listeners
        next: value => {
            console.log(`Got ${value}`)
        },
        error: err => {
            console.log(`Got ${err}`)
        },
        complete: () => {
            console.log('Completed')
        }
    })
}

main()
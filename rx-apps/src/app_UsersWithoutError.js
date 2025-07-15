import { Observable } from "rxjs";


function main() {

    //create usersId stream
    const userIdStream = new Observable(subscriber => {
        //mock usersid
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
            subscriber.next(`Fetched User ID : ${id}`)

            // if (id === 103) {
            //     subscriber.error(new Error(`User Id ${id} causes an error`))
            //     clearInterval(intervalId)
            // }

        }, 1000); //emit every 1 second

    })

    //subscriber
    userIdStream.subscribe({
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
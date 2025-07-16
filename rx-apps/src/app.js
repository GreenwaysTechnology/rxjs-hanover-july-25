import { of, partition } from "rxjs"

function main() {

    const users = of({ name: 'Subramanian', role: 'admin' }, { name: 'Ram', role: 'user' }, { name: 'Erik', role: 'user' })
    const [admins, normals] = partition(users, user => user.role === 'admin')
    admins.subscribe(value => console.log('Admins', value))
    normals.subscribe(value => console.log('Regular', value))

}
main()
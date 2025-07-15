//impure function: 
// function updateProfile(city, profile) {
//     profile.city = city
//     return profile
// }
//apply immutablity pattern: create new object every time
function updateProfile(city, profile) {

    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city: city
    // }
    // return Object.assign({}, profile, { city: city })

    return { ...profile, city: city }
}

function main() {
    const profile = {
        id: 1,
        name: 'Subrammanian Murugan',
        city: 'NewYork'
    }
    console.log('before update', profile)
    const result = updateProfile('London', profile)
    console.log('After update', result)
    console.log(profile === result ? 'Same Object' : 'Different Object')
}
main()
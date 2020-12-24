import GoFood from './gofood'

const gf = new GoFood()

export default gf

// gf.getRestaurant('c3d8177e-177b-4cc2-8cca-edcaca02860d')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


gf.getRestaurants()
    .then(data => console.log(data))
    .catch(err => console.log(err))
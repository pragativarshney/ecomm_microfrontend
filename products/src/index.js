import {faker} from '@faker-js/faker';

let products='';

for(let i=0;i<4;i++){
    const name= faker.commerce.productName();
    products += `<div>${name}</div>`
}
console.log(products)
document.querySelector("#dev-products").innerHTML = products;
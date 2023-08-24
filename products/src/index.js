import faker,{commerce} from 'faker';
import commerce from

let products='';

for(let i=0;i<4;i++){
    const name= faker.commerce;
    products += `<div>${name}</div>`
}
console.log(products);
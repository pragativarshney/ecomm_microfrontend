import {faker} from '@faker-js/faker';
import faker1 from 'faker'

const cartText= `<div>you have ${faker.number.int()} items in your cart</div>`;

document.querySelector("#cart-dev").innerHTML = cartText;
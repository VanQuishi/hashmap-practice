import {HashMap} from "./hashmap.js";

const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.length())
console.log(test.entries())

test.set('lion', 'fire golden')
test.set('dog', 'light brown');
console.log(test.length());
console.log(test.entries());

test.set('moon', 'silver')
console.log(test.length());
console.log(test.entries());

console.log(test.get('lion'))
console.log(test.get('cat'))
console.log(test.has('elephant'))
console.log(test.has('cat'))

test.remove('lion')
console.log(test.length())
console.log(test.keys())
console.log(test.values())
console.log(test.entries())

test.clear()
console.log(test.length())
console.log(test.keys())
console.log(test.values())
console.log(test.entries())
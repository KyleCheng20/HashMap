import { HashMap } from "./hashMap.js";

const hashMap = new HashMap();
// console.log(hashMap.buckets);

hashMap.set('apple', 'red');
hashMap.set('banana', 'yellow');
hashMap.set('carrot', 'orange');
hashMap.set('dog', 'brown');
hashMap.set('elephant', 'gray');
hashMap.set('frog', 'green');
hashMap.set('grape', 'purple');
hashMap.set('hat', 'black');
hashMap.set('ice cream', 'white');
hashMap.set('jacket', 'blue');
hashMap.set('kite', 'pink');
hashMap.set('lion', 'golden');

// console.log(hashMap.keys());
// console.log(hashMap.values());
// console.log(hashMap.entries());
// console.log(hashMap.buckets);

hashMap.set('lion', 'silver');
hashMap.set('kite', 'rainbow');

hashMap.set('moon', 'silver');

console.log(hashMap.buckets);
console.log(hashMap.size); 

console.log(hashMap.entries());










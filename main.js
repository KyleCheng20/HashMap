import { HashMap } from "./hashMap.js";

const hashMap = new HashMap();
console.log(hashMap.buckets);

hashMap.set("apple", "red");
hashMap.set("apple", "green");
hashMap.set("banana", "ripe");
hashMap.set("pear", "sweet");



console.log(hashMap.size); 

console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());


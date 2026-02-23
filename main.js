import { HashMap } from "./hashMap.js";

const hashMap = new HashMap();
console.log(hashMap.buckets);

hashMap.set("apple", "red");
hashMap.set("apple", "green");

console.log(hashMap.size); 
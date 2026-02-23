class HashMap {
    constructor(){
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    hash(key){
        let hashCode = 0;
        const primeNumber = 31;

        for(let i = 0; i < key.length; i++){
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value){
        const index = this.hash(key);

        if(index < 0 || index >= this.buckets.length){
            throw new Error("Trying to access out of bounds index");
        }

        // If the bucket is empty
        if(!this.buckets[index]){
            this.buckets[index] = [];
            this.buckets[index].push([key, value]);
            this.size++;
            return;
        }

        // Check is the same key in this bucket exists
        for(let keysEntry of this.buckets[index]){
            if(keysEntry[0] === key){
                keysEntry[1] = value;
                return;
            }
        }

        // If key is not in bucket then add new
        this.buckets[index].push([key, value]);
        this.size++;
    }
}

export { HashMap }
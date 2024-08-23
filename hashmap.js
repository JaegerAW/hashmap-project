class HashMap {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const weirdPrime = 31;
    for (let i = 0; i < Math.min(100, key.length); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weirdPrime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    //if key already exists, just update, don't add;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return this.keyMap;
      }
    }
    this.keyMap[index].push([key, value]);
    return this.keyMap;
  }

  get(key) {
    const index = this._hash(key);
    console.log(index);
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }

  has(key) {
    const index = this._hash(key);
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return true;
      }
      return false;
    }
  }

  remove(key) {
    //remove the key and value if found;
    //return true;
    const index = this._hash(key);
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        //swap with last element;
        [
          this.keyMap[index][i],
          this.keyMap[index][this.keyMap[index].length - 1],
        ] = [
          this.keyMap[index][this.keyMap[index].length - 1],
          [this.keyMap[index][i]],
        ];
        this.keyMap[index].pop();
        if (this.keyMap[index].length === 0) {
          this.keyMap[index] = null;
        }
        return true;
      }
    }
    return false;
  }

  length() {
    //returns the number of stored keys in the hashmap
    let total = 0;
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i] && this.keyMap[i].length === 1) {
        //by default, if no key has been stored, the indexes are not arrays, so we have to check first if each index has an existing array
        total++;
      } else if (this.keyMap[i] && this.keyMap[i].length > 1) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (this.keyMap[i][j]) {
            total++;
          }
        }
      }
    }
    return total;
  }

  clear() {
    //empties the table
    for (let i = 0; i < this.keyMap.length; i++) {
      this.keyMap[i] = null;
    }
    return this.keyMap;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }

  entries() {
    //returns an array with existing [key,value] as elements
    let entriesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          entriesArr.push(this.keyMap[i][j]);
        }
      }
    }
    return entriesArr;
  }
}

const tableOne = new HashMap();
tableOne.set("pink", "girly");
tableOne.set("grey", "shades");
tableOne.set("black", "orange");
tableOne.set("rainbow", "gold pot");
tableOne.set("calippo", "nostalgic");
tableOne.set("jaeger", "love");
tableOne.set("suryana", "waifu");
tableOne.set("suryanaa", "love");
tableOne.set("suryanaaaa", "love");

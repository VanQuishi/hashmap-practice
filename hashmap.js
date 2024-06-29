import {Node, LinkedList} from './linkedlist.js';

const Load_Factor = 0.75;

class HashMap {
  constructor(){
    this.numberOfStoredKeys = 0;
    this.buckets = [];
    this.buckets_size = 16;
    for (let i = 0; i < this.buckets_size; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.numberOfStoredKeys; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets_size;
    }

    return hashCode;
  }

  set(_key, _value) {
    let index = this.hash(_key);

    if (index < 0 || index >= this.buckets.numberOfStoredKeys) {
      throw new Error("Trying to access index out of bound");
    }
    
    let growthPoint = Math.ceil(this.buckets_size * Load_Factor);
    if (this.numberOfStoredKeys + 1 == growthPoint) {
      let tempBucket = [];
      for (let i = 0; i < this.buckets_size; i++) {
        if (this.buckets[i].head != null) {
          tempBucket[i] = this.buckets[i];
        }
        else {
          tempBucket[i] = new LinkedList();
        }
      }
      for (let i = this.buckets_size; i < this.buckets_size * 2; i++) {
        tempBucket[i] = new LinkedList();
      }

      this.buckets_size *= 2;
      this.buckets = tempBucket;
    }
    
    if (this.buckets[index].head != null) {
      let iteratorNode = this.buckets[index].head;
      while (iteratorNode != null) {
        //key already exists, update its value
        if (iteratorNode.key == _key) {
          iteratorNode.value = _value;
          return;
        }

        iteratorNode = iteratorNode.next;
      }
    }

    //no collisions, add new Node to the end of list
    this.buckets[index].add(_key, _value);
    this.numberOfStoredKeys++;

    return;
  }

  get(_key) {
    let index = this.hash(_key);

    if (index < 0 || index >= this.buckets.numberOfStoredKeys) {
      throw new Error("Trying to access index out of bound");
    }  

    if (this.buckets[index].head != null) {
      let iteratorNode = this.buckets[index].head;
      while (iteratorNode != null) {
        //key exists, return its value
        if (iteratorNode.key == _key) {
          return iteratorNode.value;
        }

        iteratorNode = iteratorNode.next;
      }
    }

    return null;
  }

  has(_key) {
    let index = this.hash(_key);

    if (index < 0 || index >= this.buckets.numberOfStoredKeys) {
      throw new Error("Trying to access index out of bound");
    }  

    if (this.buckets[index].head != null) {
      let iteratorNode = this.buckets[index].head;
      while (iteratorNode != null) {
        //key exists, return true
        if (iteratorNode.key == _key) {
          return true;
        }

        iteratorNode = iteratorNode.next;
      }
    }

    return false;
  }

  remove(_key) {
    let index = this.hash(_key);

    if (index < 0 || index >= this.buckets.numberOfStoredKeys) {
      throw new Error("Trying to access index out of bound");
    }  

    if (this.buckets[index].head != null) {
      let iteratorNode = this.buckets[index].head;
      let prevNode = this.buckets[index].head;
      while (iteratorNode != null) {
        //key exists, remove key, return true
        if (iteratorNode.key == _key) {
          if (iteratorNode == this.buckets[index].head) {
            this.buckets[index].head = this.buckets[index].head.next;
            this.numberOfStoredKeys--;
            return true;
          }
          else {
            prevNode.next = iteratorNode.next;
            this.numberOfStoredKeys--;
            return true;
          }
        }

        prevNode = iteratorNode;
        iteratorNode = iteratorNode.next;
      }
    }

    return false;
  }

  length() {
    return this.numberOfStoredKeys;
  }

  clear() {
    for (let i = 0; i < this.buckets_size; i++) {
      if (this.buckets[i].head != null) {
        this.buckets[i].head = null;
      }
    }

    this.numberOfStoredKeys = 0;
  }

  keys() {
    let arr = [];
    for (let i = 0; i < this.buckets_size; i++) {
      if (this.buckets[i].head != null) {
        let iteratorNode = this.buckets[i].head;
        while (iteratorNode != null) {
          arr.push(iteratorNode.key);
          iteratorNode = iteratorNode.next;
        }
      }
    }

    return arr;
  }

  values() {
    let arr = [];
    for (let i = 0; i < this.buckets_size; i++) {
      if (this.buckets[i].head != null) {
        let iteratorNode = this.buckets[i].head;
        while (iteratorNode != null) {
          arr.push(iteratorNode.value);
          iteratorNode = iteratorNode.next;
        }
      }
    }

    return arr;
  }

  entries() {
    let arr = [];
    for (let i = 0; i < this.buckets_size; i++) {
      if (this.buckets[i].head != null) {
        let iteratorNode = this.buckets[i].head;
        while (iteratorNode != null) {
          arr.push([iteratorNode.key, iteratorNode.value]);
          iteratorNode = iteratorNode.next;
        }
      }
    }

    return arr;
  }
}

export {HashMap};
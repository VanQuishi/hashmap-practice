import {Node, LinkedList} from './linkedlist.js';

class HashMap {
  constructor(){
    this.length = 0;
    this.buckets = [];
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(_key, _value) {
    let index = hash(_key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
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
    this.length++;

    return;
  }

  get(_key) {
    let index = hash(_key);

    if (index < 0 || index >= this.buckets.length) {
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
    let index = hash(_key);

    if (index < 0 || index >= this.buckets.length) {
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
    let index = hash(_key);

    if (index < 0 || index >= this.buckets.length) {
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
            this.length--;
            return true;
          }
          else {
            prevNode.next = iteratorNode.next;
            this.length--;
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
    return this.length;
  }

  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].head != null) {
        this.buckets[i].head = null;
      }
    }

    this.length = 0;
  }

  keys() {
    let arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
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
    for (let i = 0; i < this.buckets.length; i++) {
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
    for (let i = 0; i < this.buckets.length; i++) {
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
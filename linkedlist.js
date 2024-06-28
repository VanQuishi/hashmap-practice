class Node{
  constructor(_key, _value) {
    this.key = _key;
    this.value = _value;
    this.next = null;
  }
}

class LinkedList{
  constructor(_head = null) {
    this.head = _head;
  }

  add(_key, _value) {
    let tempNode = new Node(_key, _value);

    if (this.head == null) {
      this.head = tempNode;
    }
    else {
      // look for tail node
      let iteratorNode = head;
      while (iteratorNode.next != null) {
        iteratorNode = iteratorNode.next;
      }

      iteratorNode.next = tempNode;
    }
  }

  /* remove(_node) {
    if (this.head != null) {
      let iteratorNode = this.head;
      let prevNode = this.head;
      while (iteratorNode != null) {
        if (iteratorNode == this.head) {
          this.head = this.head.next;
          return true;
        }
        else if (iteratorNode == _node) {
          prevNode.next = iteratorNode.next;
          return true;
        }

        prevNode = iteratorNode;
        iteratorNode = iteratorNode.next;
      }
    }

    return false;
  }  */
}

export {Node, LinkedList}
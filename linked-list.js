/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.length++;
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.tail === null) this.tail = newNode;
    if (this.head !== null) newNode.next = this.head;
    this.length++;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail.val === null) console.error("Cannot remove from empty list.")
    const oldTail = this.tail;
    let newTail = this.head;
    while (newTail.next.next !== null) {
      newTail = newTail.next;
    }
    newTail.next = null;
    this.length--;
    this.tail = newTail;
    return oldTail.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head.val === null) console.error("Cannot remove from empty list.");
    const oldHead = this.head;
    let newHead = this.head.next;
    if (oldHead == this.tail) {
      this.tail = null;
      this.head = null;
      this.length--;
      return oldHead.val;
    }
    this.head = newHead;
    this.length--;
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (index === idx) {
        return current.val;
      }
      index++;
      current = current.next;
    }
    return false;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (index === idx) {
        current.val = val;
      }
      index++;
      current = current.next;
    }
    return false;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (index === idx) {
        let newNode = new Node(val);
        this.length++;
        newNode.next = current;
      }
      index++;
      current = current.next;
    }
    return false;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let oldItem = this.getAt(idx);
    if (!this.head) return;
    if (idx === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    const prev = this.getAt(idx - 1);
    if (!prev || !prev.next) {
      return;
    }
    this.length--;
    prev.next = prev.next.next;
    return oldItem.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let total = 0;
    while (current !== null) {
      total = total + current.val;
      current = current.next;
    }
    return total / this.length || 0;
  }
}

module.exports = LinkedList;

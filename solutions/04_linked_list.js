/*
Implement a singly linked list using two classes. The Node class should take in a value and track the next node in the list. The Linked List class should have reference to its head and overall list length.

The Linked List class should also have the following methods:
add - appends a given value to the end of the list
remove - deletes a given value from the list
contains - traverses the list and returns a boolean based on if a given value is present
size - returns the length of the list
toArray - gets the values in the list and transforms it into an array
toString - gets the values in the list and transforms it into a string

Example:
const tourStops = new LinkedList();
tourStops.add('Seattle');
tourStops.add('Portland');
tourStops.add('Oakland');
tourStops.add('Los Angeles');
tourStops.remove('Portland');
tourStops.toArray(); => return ['Seattle', 'Oakland', 'Los Angeles']
tourStops.add('San Diego');
tourStops.add('Phoenix');
tourStops.size(); => return 5
tourStops.remove('Seattle');
tourStops.contains('Los Angeles'); => return true
tourStops.contains('Seattle'); => return false
tourStops.toArray(); => return ['Oakland', 'Los Angeles', 'San Diego', 'Phoenix']
tourStops.size(); => return 4
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = node;
    }

    this.length += 1;
  }

  remove(value) {
    let currNode = this.head;

    if (currNode.value === value) {
      this.head = currNode.next;
    } else {
      let prevNode = null;

      while (currNode.value !== value) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      prevNode.next = currNode.next;
    }
    this.length -= 1;
  }

  contains(value) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }

  indexOf(value) {
    let i = 0;
    let currNode = this.head;

    while (currNode) {
      if (currNode.value === value) {
        return i;
      }
      currNode = currNode.next;
      i += 1;
    }
    return -1;
  }

  size() {
    return this.length;
  }

  toArray() {
    const result = [];
    let currNode = this.head;

    while (currNode) {
      result.push(currNode.value);
      currNode = currNode.next;
    }
    return result;
  }

  toString() {
    return this.toArray().join(', ');
  }
}

export { Node, LinkedList };

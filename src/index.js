// import './styles/main.css';
// import './styles/reset-css.css';

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
  }

  createNode(value) {
    return {
      value,
      next: null,
    };
  }

  append(value) {
    const newNode = this.createNode(value);
    let lastNode = this.head;
    while (lastNode.next != null) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  prepend(value) {
    const newNode = this.createNode(value);
    const currentHead = this.head;
    this.head = newNode;
    this.head.next = currentHead;
  }

  size() {
    let currentNode = this.head;
    let nodeCount = 1;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      nodeCount++;
    }
    return nodeCount;
  }

  showHead() {
    return this.head.value;
  }

  showTail() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  at(index) {
    let nodeAtIndex = this.head;
    for (let i = 0; i != index; i++) {
      nodeAtIndex = nodeAtIndex.next;
    }
    return nodeAtIndex.value;
  }

  pop() {
    let lastNode = this.head;
    let previousNode = null;
    while (lastNode.next != null) {
      previousNode = lastNode;
      lastNode = lastNode.next;
    }
    previousNode.next = null;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let nodeIndex = 0;
    while (currentNode != null) {
      if (currentNode.value === value) {
        return nodeIndex;
      }
      currentNode = currentNode.next;
      nodeIndex++;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let nodeString = '';
    while (currentNode != null) {
      nodeString = `${nodeString + currentNode.value} => `;
      currentNode = currentNode.next;
    }
    nodeString += 'null';
    return nodeString;
  }

  insertAt(value, index) {
    const newNode = this.createNode(value);
    let currentNode = this.head;
    let previousNode = null;
    if (index === 0) {
      this.head = newNode;
      newNode.next = currentNode;
      return;
    }
    for (let i = 0; i != index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    newNode.next = currentNode;
    previousNode.next = newNode;
  }

  removeAt(index) {
    let currentNode = this.head;
    let previousNode = null;
    if (index === 0) {
      this.head = currentNode.next;
      return;
    }
    for (let i = 0; i != index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
  }
}

const Names = new LinkedList('Ben');
Names.append('Jefferey');
Names.append('Pauline');
Names.prepend('Eric');
Names.append('George');
Names.append('Zach');
Names.append('Adrian');

console.log(Names.toString());
Names.insertAt('Robert', 0);
console.log(Names.toString());

import { Sorter } from './Sorter';

class Node {
    data: number;
    // next is going to be of type Node meaning the next Node, or type null
    // meaning the end, but it's default value will be null and the next will
    // be added later on
    next: Node | null = null;

    constructor(data: number) {
        this.data = data;
        //this.next = next;
    }
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    add(data: number): void {
        const node = new Node(data);

        // check if the linkedList has a head, if it doesn't have a head value
        // assign this newly created Node as it's head and return
        if (!this.head) {
            this.head = node;
            return;
        }

        // if it has a head already, assign the newly created node as the tail
        // of the linkedList
        let tail = this.head;

        // Loop through each of the Node's and check if they have a next
        // property pointing to a node
        while (tail.next) {
            tail = tail.next;
        }

        // if a Node is reached where it doesn't have a next property,
        // assign it's next property to the newly created Node...(append to the list)
        tail.next = node;
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }

        return length;
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }

        let counter = 0;
        let node: Node | null = this.head
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        throw new Error('Index out of bounds');
    }

    compare(leftIndex: number, righIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty')
        }

        return this.at(leftIndex).data > this.at(righIndex).data
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex).data
        this.at(leftIndex).data = this.at(rightIndex).data
        this.at(rightIndex).data = leftNode;
    }

    print(): void {
        if (!this.head) {
            return;
        }

        let node: Node | null = this.head;
        while (node) {
            console.log(node.data)
            node = node.next;
        }
    }
}
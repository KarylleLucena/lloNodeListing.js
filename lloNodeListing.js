class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        this.print();
    }

    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        console.log("Linked List:", str);
    }
}


// Example usage
let list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);

              

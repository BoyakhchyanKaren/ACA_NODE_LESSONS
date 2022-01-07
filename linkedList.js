class Node {

    constructor(data) {
        this.data = data; 
        this.prev = null; 
        this.next = null; 
    }

}
class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    push(data){

        const node = new Node(data);
    
        if(!this.head){
          this.head = node;
          this.tail = node;
        }else{
          node.prev = this.tail;
          this.tail.next = node;
          this.tail = node;
    
        }
    
        this.length++;
      };
      pop(){

        if(!this.head) return null
    
        const prevNode = this.tail.prev
    
        if(prevNode){
           prevNode.next = null;
           this.tail = prevNode;
        }else{
          this.head = null;
          this.tail = null;
        }
         this.length--; 
      };
      insertBeginning(data){
        const node = new Node(data);
    
        if(!this.head) {
          this.head = node;
          this.tail = node;
        }else{
          this.head.prev = node
          node.next = this.head;
          this.head = node;
        }
        this.length++;
    
      };
      removeFirst(){

        if(!this.head) return null
        const node = this.head.next;
    
        if(node){
          node.prev = null
          this.head = node
        }else{
          this.head = null
          this.tail = null
        }
         this.length--;
      }
}

const double = new DoublyLinkedList();
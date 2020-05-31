/* Write your class below */

class Queue{

    constructor(){
        this.queue = []
        this.length = 0
    }

    enqueue(x){
        this.queue.unshift(x)
        this.length++
    }

    isEmpty(){
        return this.length == 0
    }

    peek(){
        return this.queue[this.length - 1] || null
    }

    dequeue(){
        const toDelete =  this.queue[this.length - 1] || null
        this.queue.splice(this.length - 1, 1)
        this.length--
        return toDelete
    }

    print(){
        console.log(this.queue)
    }
}






//You can paste the test code from the lesson below to test your solution


let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true


/* Do not remove the exports below */
module.exports = Queue
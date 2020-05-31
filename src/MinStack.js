/* Write your class below */





class MinStack extends Stack{

    constructor(){
        super()
        this.min = null
    }

    push(x){
        if(!this.min){
            this.min = x
        }
        this.stack[this.length] = x
        this.length++
        if(x < this.min){
            this.min = x
        }
        
    }

    pop(){
        if (this.isEmpty()) {
            this.min = null
            return null
        }
        this.length--
        const toDelete = this.stack[this.length]
        if(toDelete == this.min){
            this.min = null
        }
        
        this.stack.splice(this.length, 1)
        for(let num of this.stack){
            
            if(!this.min){
                this.min = num
            }
            else if(num < this.min){
                this.min = num
            }
        }
        
        return toDelete
       
        
    }

    getMin(){
        return this.min
    }
}





//You can paste the test code from the lesson below to test your solution


let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.print()
console.log(ms.getMin())    //17
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19




/* Do not remove the exports below */
module.exports = MinStack
// let main = document.getElementById("root");
// main.textContent = "hello world"

class custom_array {
  constructor(...args) {
    this.size = args.length;
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
  }

  push(ele) {
    this[this.size] = ele;
    this.size++;
    return this.print()
  }
  pop() {
    delete this[this.size - 1];
    this.size--;
    console.log(this.print())
    return this[this.size - 1];
  }
  top() {
    return this[this.size - 1];
  }

  print() {
    let arr = [];
    for(let i in this){
        if(i=="size"){
            continue;
        }
        else arr.push(this[i]);
    }
    return arr;
  }

  printReverse() {
    return this.print().reverse()
  }

  getSize(){
    return this.size;
  }
}

let arr1 = new custom_array(1, 2, 3, 4);
console.log(arr1.getSize());



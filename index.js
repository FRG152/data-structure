class Stack {
  //creamos un array vacio para almacenar los datos.
  constructor() {
    this.stack = [];
  }
  //creamos un metodo para ir agrando un elemento al final de la matriz vacia con el push();
  push(element) {
    this.stack.push(element);
    return this.stack;
  }
  //creamos un metodo para eliminar el ultimo elemento de la matriz vacia.
  pop() {
    return this.stack.pop();
  }
  //retornamos el ultimo elemento de la matriz.
  peek() {
    return this.stack[this.stack.length - 1];
  }
  //mostramos el resultado
  print() {
    console.log(this.stack);
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log("push", stack.push(3));
console.log("pop", stack.pop());
console.log("peek", stack.peek());
stack.print();

//con un objecto.
class StackObj {
  constructor() {
    this.stack = {};
    this.count = 0;
  }
  push(element) {
    this.stack[this.count] = element;
    this.count++;
    return this.stack;
  }
  peek() {
    return this.stack[this.count - 1];
  }
  size() {
    return this.count;
  }
  print(){
    console.log(this.stack);
  }
  pop() {
    this.count--;
    const element = this.stack[this.count];
    delete this.stack[this.count];
    return element;
  }
}

console.log("-----------")
console.log("con objeto")
console.log("-----------")

const SHOW = new StackObj();
SHOW.push(1);
SHOW.push(2);
console.log(SHOW.push(3));
console.log(SHOW.peek());
console.log(SHOW.size())
SHOW.print();
console.log(SHOW.pop())



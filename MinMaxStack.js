class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }
  push(number) {
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      const currentMM = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(currentMM.min, number);
      newMinMax.max = Math.max(currentMM.max, number);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }
  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

const stack = new MinMaxStack();
stack.push(5);
stack.pop(); //?

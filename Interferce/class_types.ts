interface ClockInterface {
  //检查构造函数的实例部分
  currentTime: Date;
  setTime(d: Date): void;
}

interface ClockConstructor {
  // 检查构造函数静态部分
  new (h: number, m: number): ClockInterface;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {} // ClockInterface 不能描述
};

function createClock(ctor: ClockConstructor, h: number, m: number) {
  return new ctor(h, m);
}

console.log(createClock(Clock, 12, 10)) 

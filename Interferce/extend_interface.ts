interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {   // 可以继承多个接口
  sideLength: number;
}

let square = {} as Square;

square.color = 'blue';
square.sideLength = 10;
square.sideLength = 20;

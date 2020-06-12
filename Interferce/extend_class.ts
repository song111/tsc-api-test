class Control {
  private state: any;
}

interface SelectTableControl extends Control {
  // 继承类的成员但不包括其实现
  select(): void;
}

// 一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）
class Button extends Control implements SelectTableControl {
  select() {}
}

// Error
// class Image implements SelectTableControl{
//     select() {}
// }

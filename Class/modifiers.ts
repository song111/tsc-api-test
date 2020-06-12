// Public, private, and protected modifiers  修饰符

// 类成员默认为 public
class Animal1 {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// private 成员被标记成 private时，它就不能在声明它的类的外部访问
class Animal2 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

// new Animal2("Cat").name; // 错误: 'name' 是私有的.

// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getPersonInfo() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee('Howard', 'Sales');
console.log(howard.getPersonInfo());
// console.log(howard.name); // 错误  不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。

// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
class Person1 {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// const person = new Person1('jone','')  // 错误: 类“Person1”的构造函数是受保护的，仅可在类声明中访问

// readonly修饰符

// 使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(readonly theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus('Man with the 8 strong legs');
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

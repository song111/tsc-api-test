// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

abstract class AnimalBase {
    constructor(public name: string) {
    }
  

  move(): void {
    console.log('roaming in th earth');
  }

  abstract makeSound(): void;

}

// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。
// 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。


class PersonBase extends AnimalBase{
    makeSound(){     // 必须声明
        console.log('abstract method')
    }
}

let person:PersonBase 
person = new PersonBase('jone')

person.move()

person.makeSound()
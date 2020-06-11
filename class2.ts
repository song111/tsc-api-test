class Animal {
  static cagetory: string[] = ['bird', 'ele']
  protected name: string
  constructor(name) {
    this.name = name
  }

  run() {
    return this.name
  }
}

class Cat extends Animal {
  bark() {
    return this.name
  }
}

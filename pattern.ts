// 范型
function identify<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)

  return arg
}
identify([1, '3', null])

const myIdentify0 = identify
myIdentify0([12, 56])

const myIdentify1: <T>(arg: Array<T>) => Array<T> = identify
myIdentify1([1, '3', null])

// 调用签名
const myIdentify2: { <T>(arg: Array<T>): Array<T> } = identify
myIdentify2([1, '3', null])

// 用接口
interface indenInterface {
  <T>(arg: Array<T>): Array<T>
}

const myIdentify3: indenInterface = identify

// 带参数接口

interface indenInterface1<T> {
  (arg: Array<T>): Array<T>
}

const myIdentify4: indenInterface1<number> = identify // 定义一个只能是传入数字数组的函数

myIdentify4([1, 8])

interface Lengthwise {
  length: number
}

function lengthArg<T extends Lengthwise >(arg: T): T {
  return arg
}

lengthArg('sasas')
lengthArg([])
lengthArg({length:66})
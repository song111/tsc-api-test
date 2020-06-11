// Boolean
// Number
// String
// Array
// Tuple
// Enum
// Any
// Void
// Null and Undefined
// Never
// Object



// 基本类型练习

const u: undefined = undefined
const n: null = null
let num: number = 4444

// any
let anyValue: any = 'dddd'
anyValue = {}
let list: any[] = [1, true, "free"];


// 组合
const union:number|string = 'ssss'

const arrOfNum:number[]=[1,3,4,5]
arrOfNum.push(2)

// 元组类型允许表示一个已知元素数量和类型的数组
let user:[number,string]=[12,'sssss']

// enum类型是对JavaScript标准数据类型的一个补充
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2


// Void
 function func():void{
     console.log(2222)
 }



//  Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error



// 类型断言
let someValue: any = "this is a string";

let strLength: number = someValue.length;
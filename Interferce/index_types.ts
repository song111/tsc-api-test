// 索引
interface StringArray<T> {
  [index: number]: T;
}

let strArray: StringArray<string> = ['Bob', 'Fred'];
let myStr: string = strArray[0];

let  objArray :StringArray<object>=[{title:'ssss'}]

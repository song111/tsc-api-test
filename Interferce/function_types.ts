// 修饰函数

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let search: SearchFunc = function(source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
};


console.log(search('1234445566','8'))
function echo<T>(args: T): T {
  return args
}

interface IWithLength{
    length:number
}

function echoWithLength<T extends IWithLength > (args:T):T{
console.log(args.length)
return args
}

echoWithLength('sddssdd')
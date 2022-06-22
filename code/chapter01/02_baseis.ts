let a:number;
a=12345678
console.log(a);

let c:boolean = true;
// 变量和声明同时进行的  ts可以进行对变量类型检测
console.log(c)


function sum(a:number,b:number):number {
    return a + b;
}
console.log(sum(123,456))

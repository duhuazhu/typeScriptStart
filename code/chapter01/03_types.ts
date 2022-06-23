let a:10;
a = 10;
// a= 11;
// 字面量声明

//可以实用| 来连接多个类型
let b:"male" | "female" | "";
b = "male";
b = "female";

//只能布尔类型 字符串类型
let c:boolean | string;
c= true
c="123";
console.log(c);

//any 表示的任意类型 相当于对该变量关闭了ts的类型检测
// 声明变量 如果不指定类型 ts 自动判断变量类型为any
let d :any;

d=10;
d='hello';
d=true;


let e:unknown; //实习上就是一个类型安全的any
e =10;
e = "hello";
// e = true;

let s:string;
s=d; //d 类型是any 可以赋值任意变量

/*if(typeof e=="string"){
    s = e;
}
console.log(s);*/

//类型断言
s  = e as string;
console.log(s);

s  = <string>e;

console.log(s);

//void 表示为空 没有返回值
function fn ():void {
    console.log(123);
}
fn()

//never 表示永远不会返回结果
function fn2():never {
    throw new Error('报错了')
}
// fn2()

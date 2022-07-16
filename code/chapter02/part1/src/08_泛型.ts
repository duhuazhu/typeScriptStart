/*function fn(a:number):number {
    return a;
}*/
// 定义函数或者类 遇到类型不明确的时候可以使用泛型
function fn<T>(a:T):T {
    return  a;
}

// 可以直接调用泛型的函数
// fn(10) //ts可以跟我们类型自动推断
let result2 =  fn<string>('123') // 指定泛型

//泛型可以同时指定多个
function fn2<T,K>(a:T,b:K):T{
    console.log(b);
    return a;
}
fn2<string,number>('123',111)

interface Inter{
    length: number;
}

//泛型T必须是inter的实现类(子类)
function fn3<T extends Inter>(a:T):number {
    return a.length;
}

fn3({length:10});


class Myclass<T>{
    name:T;
    constructor(name:T){
        this.name = name;
    }
}
const mc = new Myclass<string>('孙悟空');


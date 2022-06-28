let a: object;
a={};
a =  function (){};

// {}  用来指定对象中可以包含哪些属性
// 语法 : {属性名:属性值,属性名:属性值}
// 属性名后边加上? 表示属性是可选的
let b: {name: string,age?: number};
b  = {name: "孙悟空"};

let c: {name: string,[propName:string]:any};
c = {name: "猪八戒",age:12,}
// 语法:(形参:类型,形参:类型...)=>返回值
let d:(a:number, b:number)=>number;
d  = function (n1,n2){
    return n1 + n2
}

// 表示字符串数组
let e:string[];
e =  ['a','b','c'];

// number [] 表示数值数值
let f:number[];

let g:Array<number>

g = [1,2,3,4]

// let h = Array<any>;

// 元组 固定长度的数组
let h:[string,string]
h= ['hello','world']


// enum 枚举
enum Gender{
    Male,
    Female,
}
let i:{name:string,gender:number}
i = {
    name:'孙悟空',
    gender:Gender.Male
}

// & 表示同时
let j: { name:string } & { age:number };

j  = {name:"ddd",age:19}

//类型别名
type myType =1 | 2 |3 |4 |5 ;
let k: myType
let l: myType
k = 1;

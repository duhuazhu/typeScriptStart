// 使用class关键字来定义一个类
class Person {
    name: string ='孙悟空';
    // age: number =18;
    // 在属性前使用static 关键字 可以定义属性 (静态属性)
    static age: number =18;
    // 加上readonly 属性 只读属性


    //方法  也可以 加上static 成为静态方法
    sayHello(){
        console.log('hello 大家好');
    }
}
const per =new Person();
console.log(per.name,Person.age );

per.sayHello();

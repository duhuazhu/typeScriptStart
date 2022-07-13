(function (name){
    // 描述一个对象的类型
    type myType = {
        name: string,
        age : number;
    }

    /*
      * 接口定义一个类的结构 应该定义哪些属性方法
      * */

    interface myInterface{
        name: string;
        age: number;
    }
    //可以重复声明
    interface myInterface{
        gender: string;
    }

    const obj:myInterface={
        name: 'sss',
        age: 19,
        gender: 'male',
    }

    /*
    * 接口可以定义类的时候 限制类的结构 接口里都是抽象方法
    * */
    interface myInter{
        name: string;
        sayHello():void;
    }

    class Myclass implements myInter{
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('大家好');
        }
    }
    const myclass = new Myclass('dhz',19);
    myclass.sayHello();
})

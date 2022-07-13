(function () {

     /*
     abstract 开头的类是抽象类,
     抽象类和其他的类区别不大,只是不能拿来创建对象
     抽象类就是专门 继承
     可以添加 抽象方法
      */

   abstract class Animal{
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        // 抽象方法必须重写
        abstract sayHello():void;
    }
    class  Dog extends Animal{
        sayHello() {
            console.log('hello world');
        }


    }
    const dog = new Dog('dog');
    dog.sayHello();
})

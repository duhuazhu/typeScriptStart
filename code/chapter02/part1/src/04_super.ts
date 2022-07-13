(function (name: string) {
    class Animal{
        name: string;
        constructor(name: string) {
        this.name = name;
        }
        sayHello(){
            console.log('Hello');
        }
    }
    class  Dog extends Animal{
        age: number;
        constructor(name: string,age: number) {
            // 如果在子类的重写构造函数 在子类的构造函数必须对父类
            super(name);//调用父类构造函数
            this.age = age;
        }
        sayHello(){
            super.sayHello();
        }
    }
    const dog = new Dog('dog',10);
    dog.sayHello();
})

class Animal{
    public name: string;
    public age: number;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(this.name+'在叫')
    }
}

class Cats extends Animal{
    run(){
        console.log(this.name+'在跑')
    }
}
const cat  =new Cats('小猫',5);
cat.sayHello();
cat.run();

class Dogs extends Animal{}

const dog1 = new Dogs('小狗',20);


dog1.sayHello();

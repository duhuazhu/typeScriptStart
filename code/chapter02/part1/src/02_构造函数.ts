class Dog{
    name:string;
    age :number;

    //构造函数
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }


    bark(){
        alert('汪汪汪')
        

    }
}
const dog = new Dog('小黑',4);
const dog2 = new Dog('小白',1);
dog2.bark();
console.log(dog);

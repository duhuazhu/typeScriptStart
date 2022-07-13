(function () {
    class Person {
       private  name: string;
       private  age: number;
       /*
       * protected 只能在当前类和当前类的子类访问 受保护的属性
       * */
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        get _name() { return this.name; }
        set _name(_name: string) { this.name = _name}
/*        getName() { return this.name; }
        getAge() { return this.age; }
        setName(name: string) { this.name = name; }*/
    }
    const per = new Person('dhz',20);
 /*   per.name = 'tt';
    per.age = 21;*/
    console.log(per._name);
    console.log(per);


    class A{
        protected name: string
        constructor(name: string) {
            this.name = name;
        }
    }
    class B extends A{

        test(){
            console.log(this.name);
        }
    }
    const b = new B('h');
    console.log(B.name);
    /*
    * 类调用 对象不能调用
    * */


    /*简写*/

    class C{
        constructor(public name: string, public age: number) {
        }
    }

})();

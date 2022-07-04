console.log('hello world');
let a = 10;
let b = 10;
console.log(b);

function fn(a:number,b:number){
    return a + b;
}

function fn2(this:Window){
    alert(this)
}

let box1  =document.getElementById('box1');
//strictNullChecks 设置为true  得判断是否为空
box1?.addEventListener('click', function(e){

})


export const hello = 'hello world';

class Snake{
    // 表示蛇的元素
    head:HTMLElement;
    //蛇的身体 包括蛇头
    bodies:HTMLCollection;

    element:HTMLElement;
    constructor() {
        this.element =document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div ') as HTMLElement;
        this.bodies =  this.element.getElementsByTagName('div');
    }

    //获取蛇的坐标
    get X(){
        return this.head.offsetLeft;
    }
    // 获取蛇y轴坐标
    get Y(){
        return this.head.offsetTop;
    }

    // 设置蛇头坐标
    set X(value:number){
        if(this.X ===value){
            return;
        }

        if(value<0  ||  value>290){
            //蛇完蛋了
            throw new Error("蛇撞墙了")
        }
        this.head.style.left = value +'px';
    }

    set Y(value:number){
        if(this.Y ===value){
            return;
        }

        if(value<0  ||  value>290){
            //蛇完蛋了,抛出异常
            throw new Error("蛇撞墙了")
        }
        this.head.style.top = value +'px';
    }
    //蛇增加身体的方法
    addBody(){
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }

    //添加一个蛇身体移动的方法
    moveBody(){

    }

}
export  default  Snake;

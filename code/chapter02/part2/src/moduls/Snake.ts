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

        if(this.bodies[1] && (this.bodies[1]as HTMLElement).offsetLeft === value ){
            // 如果发生了掉头 继续反方向走
            if(value > this.X){
                value = this.X -10;
            }else{
                value = this.X + 10;
            }
        }



        this.moveBody();
        this.head.style.left = value +'px';
        this.checkHeadBody()


    }

    set Y(value:number){
        if(this.Y ===value){
            return;
        }

        if(value<0  ||  value>290){
            //蛇完蛋了,抛出异常
            throw new Error("蛇撞墙了")
        }
        if(this.bodies[1] && (this.bodies[1]as HTMLElement).offsetTop === value ){
            // 如果发生了掉头 继续反方向走
            if(value > this.Y){
                value = this.Y -10;
            }else{
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value +'px';
        this.checkHeadBody()
    }
    //蛇增加身体的方法
    addBody(){
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }

    //添加一个蛇身体移动的方法
    moveBody(){
        /*
        * 将后面得身体设置为前边身体得位置
        * */
        //遍历获取所有身体的位置
        for (let i =this.bodies.length-1 ;i>0; i--) {
            let X  = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left =  X +'px';
            (this.bodies[i] as HTMLElement).style.top =  Y +'px';
        }
    }

    checkHeadBody() {
        //获取所有身体  检查是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd=this.bodies[i]as HTMLElement;
            if(this.X=== bd.offsetLeft && this.Y === bd.offsetTop){
                    throw new Error('撞到自己了')
            }
        }
    }

}
export  default  Snake;

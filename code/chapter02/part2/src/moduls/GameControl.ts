import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"



class GameControl{
    Snake:Snake;
    Food:Food;
    ScorePanel:ScorePanel;


    //创建一个属性 存储蛇的方向
    direction: string='';

    //创建蛇是否还活着
    isLive:boolean=true;

    constructor() {
        this.Snake = new Snake();
        this.Food =new Food();
        this.ScorePanel =new ScorePanel();
        this.init();
    }
    init(){
        //绑定键盘按下的事件
        document.addEventListener("keydown",this.keydownHandler.bind(this));
        this.run();//蛇移动
    }
    //创建键盘按下响应函数
    keydownHandler(event:KeyboardEvent){
        this.direction = event.key;

    }
    //创建一个蛇移动的方法

    run(){
        /*
        * 根据方向改变蛇的方向
        * */
        let X =this.Snake.X;
        let Y= this.Snake.Y

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                //向上自动减少
                Y-=10;
                break;
            case "ArrowDown":
            case "Down":
                //向下移动
                Y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                X-=10;
                break;
            case "ArrowRight":
            case "Right":
                X+=10;
                break;
        }
        this.checkEat(X,Y)



        try{
            this.Snake.X = X;
            this.Snake.Y = Y;
        }catch (e:any) {
            alert(e.message);
            this.isLive  =false;
        }


        this.isLive && setTimeout(this.run.bind(this),300 - (this.ScorePanel.level-1)*30)

    }

    //检查蛇是否吃到了食物
    checkEat(X:number,Y:number){
        if (X ===this.Food.X && Y===this.Food.Y){
            //食物位置重置
            this.Food.change();
            this.ScorePanel.addScore();
            this.Snake.addBody();
        }
    }


}
export default  GameControl;

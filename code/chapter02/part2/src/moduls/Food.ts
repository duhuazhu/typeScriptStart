//定义食物类
class Food{
    // 定义一个属性 表示食物对应的元素
    element:HTMLElement;
    constructor(){
        //获取页面中food元素 赋给element
        this.element = document.getElementById('food')!;

    }

    // 定义一个获取食物x轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }

    change(){
        // 随机位置
        let top = Math.round(Math.random()*29)*10;
        let left = Math.round(Math.random()*29)*10;

        this.element.style.left = top+ 'px';
        this.element.style.top = left+ 'px';
    }
}
export default Food

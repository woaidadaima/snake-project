class Snake {
    // 蛇头
    head: HTMLElement
    // 蛇身
    body: HTMLCollection
    // 获取蛇的容器
    container: HTMLElement
    constructor() {
        this.container = <HTMLElement>document.getElementById('snake')
        this.head = <HTMLElement>document.querySelector('#snake>div')
        this.body = this.container.getElementsByTagName('div')
    }
    snakeGrowUp = () => {
        this.container.insertAdjacentHTML("beforeend", "<div></div>");
    }
    // 蛇身移动
    moveBody = () => {
        for (let i = this.body.length - 1; i > 0; i--) {
            let X = (this.body[i - 1] as HTMLHtmlElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLHtmlElement).offsetTop;
            (this.body[i] as HTMLHtmlElement).style.left = X + 'px';
            (this.body[i] as HTMLHtmlElement).style.top = Y + 'px'
        }
    }
    // 蛇是否撞到自己
    eatSelf = () => {
        for (let i = this.body.length - 1; i > 0; i--) {
            if ((this.body[i] as HTMLHtmlElement).offsetLeft === this.X && (this.body[i] as HTMLHtmlElement).offsetTop === this.Y) {
                throw new Error('蛇撞到自己了')
            }
        }
    }
    // 获取蛇头x方向
    get X() {
        return this.head.offsetLeft
    }
    // 获取蛇头y方向
    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头移动x方向
    set X(directionValue: number) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.X === directionValue) {
            return;
        }
        // x的合法范围是0-290之间
        if (directionValue < 0 || directionValue > 290) {
            throw new Error('蛇撞墙了')
        }
        // 蛇身长度大于1时不能掉头
        if (this.body.length > 1 && directionValue === (this.body[1] as HTMLElement).offsetLeft) {
            if (this.X > directionValue) {
                directionValue = this.X + 10
            } else {
                directionValue = this.X - 10
            }
        }
        this.moveBody()
        this.head.style.left = directionValue + 'px'
        // 判断蛇是否撞到自己
        this.eatSelf()
    }
    // 设置蛇头移动y方向
    set Y(directionValue: number) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.Y === directionValue) {
            return;
        }
        // y的合法范围是0-290之间
        if (directionValue < 0 || directionValue > 290) {
            throw new Error('蛇撞墙了')
        }
        // 蛇身长度大于1时不能掉头
        if (this.body.length > 1 && directionValue === (this.body[1] as HTMLElement).offsetTop) {
            if (this.Y > directionValue) {
                directionValue = this.Y + 10
            } else {
                directionValue = this.Y - 10
            }
        }
        this.moveBody()
        this.head.style.top = directionValue + 'px'
        this.eatSelf()
    }
}
export default Snake
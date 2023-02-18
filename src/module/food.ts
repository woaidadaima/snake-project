import Snake from "./snake"

// 定义食物的类
class Food {
    food: HTMLElement
    snake: Snake
    constructor(food: HTMLElement = <HTMLElement>document.querySelector('#food')) {
        this.food = food
        this.snake = new Snake()
    }
    // 修改食物位置
    change = () => {
        let X = Math.floor(Math.random() * 30) * 10
        let Y = Math.floor(Math.random() * 30) * 10
        for (let i = 0; i < this.snake.body.length; i++) {
            if ((this.snake.body[i] as HTMLElement).offsetLeft === X && (this.snake.body[i] as HTMLElement).offsetTop === Y) {
                this.change()
            }
        }
        this.food.style.left = X + 'px'
        this.food.style.top = Y + 'px'
    }
    get X() {
        return this.food.offsetLeft
    }
    get Y() {
        return this.food.offsetTop
    }
}
export default Food
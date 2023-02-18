
import Food from "./food";
import ScorePanel from "./scorePanel";
import Snake from "./snake";
class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = ''
    isLive: boolean = true
    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scorePanel = new ScorePanel(5, 2)
        // 如果方向不为空开始运动起来
        this.init()
        this.run()
    }
    // 初始化游戏
    init = () => {
        // 绑定键盘按下事件
        document.addEventListener('keydown', this.keydownHandler)

    }
    //  键盘按下事件处理函数
    keydownHandler = (event: KeyboardEvent) => {
        // if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        //     this.direction = event.key
        // }
        this.direction = event.key
    }

    // 检查食物是否被吃
    checkEat = (x: number, y: number) => {
        if (this.food.X === x && this.food.Y === y) {
            // 如果蛇头位置和食物重合，修改食物位置
            this.food.change()
            // 吃到食物增加一分
            this.scorePanel.scoreAdd()
            // 蛇身增加一杰
            this.snake.snakeGrowUp()
        }
    }

    run = () => {
        // 获取蛇头的X和Y坐标
        let x = this.snake.X
        let y = this.snake.Y
        this.checkEat(x, y)
        // 判断蛇的方向
        switch (this.direction) {
            case 'ArrowUp':
                y -= 10
                break
            case 'ArrowDown':
                y += 10
                break
            case 'ArrowLeft':
                x -= 10
                break
            case 'ArrowRight':
                x += 10
                break
        }
        // 让蛇移动
        try {
            this.snake.X = x
            this.snake.Y = y
        } catch (e: any) {
            alert(e.message + 'game over')
            // 游戏结束
            this.isLive = false
        }

        this.isLive && setTimeout(this.run, 500 - (this.scorePanel.levelValue - 1) * 100)
    }
}
export default GameControl
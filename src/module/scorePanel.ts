class ScorePanel {
    score: HTMLElement
    level: HTMLElement
    // 初始分数
    scoreValue = 0
    // 初始等级
    levelValue = 1
    // 最大等级
    maxLevel: number
    // 升级需要的分数
    scoreToUp: number
    constructor(maxLevel: number = 10, scoreToUp = 10) {
        this.score = <HTMLElement>document.querySelector('#score')
        this.level = <HTMLElement>document.querySelector('#level')
        this.maxLevel = maxLevel
        this.scoreToUp = scoreToUp
    }
    scoreAdd = () => {
        this.score.innerHTML = ++this.scoreValue + ''
        if (this.scoreValue % this.scoreToUp == 0) {
            this.levelUp()
        }
    }
    // 满十分提升1等级
    levelUp = () => {
        if (this.levelValue < this.maxLevel) {
            this.level.innerHTML = ++this.levelValue + ''
        }
    }
}
export default ScorePanel
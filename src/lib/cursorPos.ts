
interface Position {
    x: number,
    y: number
}

export default function (el?: HTMLElement, position?: Position, onChange?: Function) {
    [this.x, this.y] = [position.x, position.y]
    this.get = () => ({ x: this.x, y: this.y })
    this.set = (position: Position) => [this.x, this.y] = [position.x, position.y]
}
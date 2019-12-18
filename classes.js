
class Player {
  constructor() {
    this.x = 10
    this.y = 10
    this.width = 30
    this.height = 30
    this.direction = NaN
    this.catAdj
    this.catOps
    this.hpt
  }

  draw() {
    ctx.fillStyle = "yellow"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  update() {
    switch (this.direction) {
      case 0:
        this.x++ //Right
      break
      case 1:
        this.x-- //Left
      break
      case 2:
        this.y++ //Down
      break
      case 3:
        this.y-- //Up
      break
    }
  }

}

class Enemy {
  constructor() {
    this.x = cnv.width - 40
    this.y = cnv.height - 40
    this.width = 30
    this.height = 30
  }

  draw() {
    ctx.fillStyle = "green"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

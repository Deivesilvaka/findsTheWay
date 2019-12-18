
let QTable = []

const fps = 1000/70

let response = {
  Up: 3,
  Down: 2,
  Left: 1,
  Right: 0
}

function init(player, enemy) {
  setInterval(calculateDistance, fps)
}

function calculateDistance() {

  //Cateto adjacente
  let catAdj = 0
  //Cateto oposto
  let catOps = 0
  //Hipotenusa
  let hpt = 0

  if (player.y < enemy.y) {
    catAdj = (( enemy.y + enemy.height ) - player.y)
    player.catAdj = catAdj
    catOps = (( enemy.x + enemy.width ) - player.x)
    player.catOps = catOps
    hpt = Math.hypot(catAdj, catOps)
    player.hpt = hpt
  }

  let html = `Cateto Adjacente: ${catAdj}<br><br>Cateto Oposto ${catOps}<br><br>Hipotenusa ${hpt.toFixed(2)}<br><br>Hipotenusa === Distância`
  setDatas(html)

}

function setDatas(html) {
  document.querySelector("#datas").innerHTML = html
}

function DoResponse(){
  for(let i in QTable){

    if(QTable[i] === response.Up){
      player.direction = response.Up
    }

    else if(QTable[i] === response.Down){
      player.direction = response.Down
    }

    else if(QTable[i] === response.Left){
      player.direction = response.Left
    }

    else if(QTable[i] === response.Right){
      player.direction = response.Right
    }

  }
}

init(player, enemy)

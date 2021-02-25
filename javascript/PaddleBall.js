const gameWin = document.getElementById("game-box")

if(gameWin.getContext){
    fx = gameWin.getContext("2d");
    fx.fillStyle = 'rgb(66, 108, 245)'
    fx.fillRect(25,470,100, 10)
}
else{
    // for unsuported windows
} 
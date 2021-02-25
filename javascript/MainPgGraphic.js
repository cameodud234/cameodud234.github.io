const graphicWin = document.getElementById("main-page-canvas");

let ctx = null;

if(graphicWin.getContext){
    ctx = graphicWin.getContext("2d");
}
else{
    // for unsuported windows
} 
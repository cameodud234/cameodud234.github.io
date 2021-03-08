import {randomBall} from "./lib/randLib";

let process = () => {

    const time = 1000;
    
    let window1 = document.getElementById("main-page-canvas-1");
    let moveSet1 = [];

    setInterval(()=>{
        randomBall(window1, moveSet1, false);
    }, time);

    let window2 = document.getElementById("main-page-canvas-2");
    let dummyList = [];
    setInterval(()=>{
        randomBall(window2, dummyList,true);
    }, time);
}



try{
    process();
}
catch(err){
    console.error(err);
}
let randInt = (begin, end) => {
    let x = Math.floor( ((end - begin)*Math.random()) + begin );
    return x;
}

// won't work need to redo these functions
// let randomBall = (window) => {
//     const dummyList = [];
//     randomBall(window, dummyList, true);
// }

let randomBall = (window, posSet, overlap) => {
    if(!window.getContext){ throw new Error("window needs to be from canvas"); }

    let radius = randInt(10,20);
    let ctx = window.getContext("2d");

    let minXPos = 0 + radius;
    let maxXPos = window.width - radius;
    let minYPos = 0 + radius;
    let maxYPos = window.height - radius;

    let X = randInt(minXPos, maxXPos);
    let Y = randInt(minYPos, maxYPos);

    // checks if sufficient distance between adjacent
    // center points
    let moveIntersect = (x,y,arr)=>{
        let d = Math.sqrt(Math.pow(arr[0] - x, 2) + Math.pow(arr[1] - y, 2));
        if(d < radius + arr[2]){
            return true;
        }
        return false;
    }

    // checks if (x,y) is in moveSet
    let moveCheck = (x,y)=>{
        if(posSet.length != 0){
            for(let i = 0; i < posSet.length; i++){
                let tmp = posSet[i];
                if(tmp[0] === x && tmp[1] === y){
                    return false;
                }
                else if(moveIntersect(x,y,tmp)){
                    return false;
                }
            }
        }
        return true;
    }

    // overlap allows different circles to overlap
    if(!overlap){
        if(!moveCheck(X,Y)){ return; }
        posSet.push([X, Y, radius]);
    }
    // console.log(`radius: ${radius}, minPoint: (${minXPos},${minYPos}), maxPoint: (${maxXPos},${maxYPos})`);
    // console.log(`radius: ${radius}, minPoint: (${X},${Y})`);
    //console.log(`posSet: ${posSet}`);

    ctx.beginPath();
    ctx.arc(X, Y, radius , 0, 2 * Math.PI, false);

    let r = randInt(50,255);
    let b = randInt(50,255);
    let g = randInt(50, 255);

    ctx.fillStyle = 'rgb(' + r + ','  + b + ',' + g + ')';
    ctx.fill();
}

export {
    randInt, 
    randomBall
}
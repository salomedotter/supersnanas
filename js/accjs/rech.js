var thelayer1 = document.querySelector("#Layer_1");

const numberHeart = 35;
const svgContainer = document.getElementById("alls");

const heart = document.getElementById("Layer_1");

for(let i = 2 ; i<numberHeart; i++){
    let copy = heart.cloneNode(true);
    let path = copy.getElementsByTagName("path")[0];
    // console.log(path);
    copy.id = `Layer_${i}`;
    copy.dataset.name = `Layer ${i}`;
    svgContainer.appendChild(copy);

    path.id = `cls-${i}`;
    path.setAttribute("transform", `scale(${(numberHeart-i)/numberHeart})`);
}

// let mover = new RandomMover(document.getElementById("firstMover"));

function draw(){

    

    const hearts = document.getElementsByClassName("heart");
    for(let i = 0; i<hearts.length ; i++){
       let  h  = hearts[i];
        const transform = h.getAttribute("transform", "scale");
        
    
        if(transform[0] == "s"){
            let value = transform;
            // console.log(transform);
            value = transform.replace('scale(','');
            value = value.replace(')','');
            
            h.setAttribute("transform", `scale(${(value*1.1)%10})`);
        }
        
    }

   
}

let frameCounter = 0;
const slowFactor = 2;
function frameRateManager(){

    frameCounter++;
    if(frameCounter%slowFactor == 0){
        draw()
    }
    requestAnimationFrame(frameRateManager);
}

frameRateManager();

$(document).ready(function() {
    console.log("ready!");

});




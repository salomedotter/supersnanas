$(document).ready(function(){
    animateDiv('.png-size-belle');
    animateDiv('.png-size-bulle');
    animateDiv('.png-size-rebelle');
    animateDiv('.bulle-h');
    animateDiv('.phobu');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 10000, function(){
      animateDiv(myclass);        
    });
    
};

// let mover = new RandomMover(document.getElementById("firstMover"));
for(let i = 0; i<30;i++){
    let newMover = new RandomMover(document.getElementById("firstMover"));
}
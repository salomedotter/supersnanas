function clickcoeur() {
    console.log("coucou")
   
}

function scrollcool(){
    window.scroll(0,500)
}

const stock = document.getElementById("alls").children

for (let i = 0; i < stock.length; i++) {
    console.log(stock[i]);
    if(stock[i].id === "Layer_3") {
        stock[i].addEventListener("click",scrollcool);
    }

    //valable pour x fonction inventée
    // stock[i].addEventListener("click",explose);
  }

  function positionTheDot() {

    // What percentage down the page are we? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
    // Get path length
    var path = document.getElementById("theMotionPath");
    var pathLen = path.getTotalLength();
    
    // Get the position of a point at <scrollPercentage> along the path.
    var pt = path.getPointAtLength(scrollPercentage * pathLen);
    
    // Position the red dot at this point
    var dot = document.getElementById("dot");
    dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
    
  };
  
  // Update dot position when we get a scroll event.
  window.addEventListener("scroll", positionTheDot);
  console.log("gigi")
  // Set the initial position of the dot.
  positionTheDot();
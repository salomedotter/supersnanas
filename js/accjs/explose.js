// declared vars we need:
var exploding, mainSVG, layers, segment;

// wrote init function, which is triggered by window.onload (below):
function init() {
  // capture reference (cache) our main SVG element:
  mainSVG = document.getElementsByTagName("svg")[0];
  // cache SVG element children (hopefully shapes and paths and groups)
  layers = mainSVG.children;
  // define "segment", this is used to define how far away given our SVG's viewbox our layers should distribute themselves:
  segment = 240 / layers.length;
  // here we just bind a click event on the main SVG to toggle explosion on/off:
  mainSVG.addEventListener('click', explodeLayersToggle);
};

// here we write simple toggle method that calls "explosion" or "collapses" our SVG layers:
function explodeLayersToggle() {
  if (!exploding) {
    explodeAndDistributeLayers(layers);
    exploding = true;
  } else {
    collapseBack();
    exploding = false;
  }
};

// this is the main method used to rotate and separate apart our svg layers:

function explodeAndDistributeLayers(layers) {
 
  let rootIndex = 0;
 
  // we go through each layer of SVG element
  for (const layer of layers) {
    
    // if we see that the layer is another group (of layers potentially), we loop through it as well:
    if (layer.tagName === "g" && layer.children.length > 1) {
  
      let groupIndex = 0;
      
      // each layer gets transform where first 3 transformations are typical for building isometric explosion view. The last one is a simple formula to help set layers a bit "apart":
      for (const sublayer of layer.children) {
  
        let transformString = `scale(0.8) skewX(30) rotate(-10) translate(50,-50) translate(${groupIndex*segment/2},${-groupIndex*segment/2})`;
        
        sublayer.setAttribute("transform", transformString);
   
        groupIndex++;
      }
    
      // if there is a simple SVG element instead of a group - we just transform it:
    } else {
      
       let transformString = `scale(0.8) skewX(30) rotate(-10) translate(${rootIndex*segment-180},${-rootIndex*segment+180})`;
      
      layer.setAttribute("transform", transformString);
     
      rootIndex++;
    };
  };
};

// and this is the method that resets the explosion view by setting all transforms back to initial state:
function collapseBack() {
  for (const layer of layers) {
    
    if (layer.tagName === "g" && layer.children.length > 1) { 
      for (const sublayer of layer.children) {
        sublayer.setAttribute("transform", `scale(1.0) skewX(0) rotate(0) translate(0,0)`);
      }
    }
    layer.setAttribute("transform", `scale(1.0) skewX(0) rotate(0) translate(0,0)`);
  };
}



window.onload = init();
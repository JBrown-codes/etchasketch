const defaultResolution = 16;
const defaultBackgroundColor = 'white';
const defaultForegroundColor = 'black';

let canvas = {
  draw: function(resolution, backgroundColor, foregroundColor) {
    // debugger;
    var canvasContainer = document.getElementById('container');
    canvasContainer.style.gridTemplateColumns=`repeat(${resolution}, 1fr)`;
    canvasContainer.style.gridTemplateRows=`repeat(${resolution}, 1fr)`;
    for (i = 0; i < resolution ** 2; i++) {
      var newPixel = document.createElement('div');
      newPixel.style.backgroundColor=`${backgroundColor}`;
      newPixel.style.opacity='1.0';
      newPixel.setAttribute('id', i);
      newPixel.addEventListener('mouseover', function(event) {
        var pixelHovered = event.target;
        if (foregroundColor == 'random') {
          randomR = Math.floor(Math.random() * 256)
          randomG = Math.floor(Math.random() * 256)
          randomB = Math.floor(Math.random() * 256)
          pixelHovered.style.backgroundColor=`rgb(${randomR}, ${randomG}, ${randomB})`
        } else if (foregroundColor == 'darken') {
          pixelHovered.style.opacity=pixelHovered.style.opacity - 0.1;
        } else {
          pixelHovered.style.backgroundColor=`${foregroundColor}`;
        }
      })
      canvasContainer.appendChild(newPixel);
    }
  },
  reset: function(resolution, backgroundColor, foregroundColor) {
    var canvasContainer = document.getElementById('container');
    canvasContainer.innerHTML = "";
    this.draw(resolution, backgroundColor, foregroundColor);
  },
  // changeResolution: function(resolution, backgroundColor, foregroundColor) {
  //   this.reset(resolution, backgroundColor, foregroundColor);
  // },
  // changeBackgroundColor: function(resolution, backgroundColor, foregroundColor) {
  //   this.reset(resolution, backgroundColor, foregroundColor);
  // },
  // changeForegroundColor: function(resolution, backgroundColor, foregroundColor) {
  //   this.reset(resolution, backgroundColor, foregroundColor);
  // }
}

function addEventListeners() {
  var resetButton = document.getElementById('resetButton');
  var resolutionSelector = document.getElementById('resolutionSelector');
  var backgroundColorSelector = document.getElementById('backgroundColorSelector');
  var foregroundColorSelector = document.getElementById('foregroundColorSelector');
  resolutionSelector.value = 16;
  resetButton.addEventListener('click', function() {
    canvas.reset(resolutionSelector.value, backgroundColorSelector.value, foregroundColorSelector.value);
  });
  resolutionSelector.addEventListener('change', function() {
    canvas.reset(resolutionSelector.value, backgroundColorSelector.value, foregroundColorSelector.value);
  });
  backgroundColorSelector.addEventListener('change', function() {
    canvas.reset(resolutionSelector.value, backgroundColorSelector.value, foregroundColorSelector.value);
  });
  foregroundColorSelector.addEventListener('change', function(){
    canvas.reset(resolutionSelector.value, backgroundColorSelector.value, foregroundColorSelector.value);
  });
}

addEventListeners()
canvas.draw(defaultResolution, defaultBackgroundColor, defaultForegroundColor)
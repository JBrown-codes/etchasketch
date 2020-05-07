let resolution = 16;
let colorBackground = 'white';
let colorForeground = 'black';

let canvas = {
  draw: function() {
    var canvasContainer = document.getElementById('container');
    canvasContainer.style.gridTemplateColumns=`repeat(${resolution}, 1fr)`;
    canvasContainer.style.gridTemplateRows=`repeat(${resolution}, 1fr)`;
    for (i = 0; i < resolution ** 2; i++) {
      var newPixel = document.createElement('div');
      newPixel.classList.add('canvasPixels');
      newPixel.setAttribute('id', i);
      newPixel.addEventListener('mouseover', function(event) {
        let pixelHovered = event.target;
        if (pixelHovered.className === 'canvasPixels') {
          pixelHovered.classList.remove('canvasPixels');
          pixelHovered.classList.add('canvasPixelsHovered');
        }
      })
      canvasContainer.appendChild(newPixel);
    }
  },
  reset: function() {
    var canvasContainer = document.getElementById('container');
    canvasContainer.innerHTML = "";
    this.draw();
  },
  changeResolution: function(newResolution) {
    resolution = newResolution;
    this.reset();
  }
}

var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
  canvas.reset();
});
var resolutionSelector = document.getElementById('resolutionSelector');
resolutionSelector.addEventListener('change', function() {
  newResolution = resolutionSelector.value;
  canvas.changeResolution(newResolution);
});
// var backgroundColorSelector = document.getElementById('backgroundColorSelector');
// backgroundColorSelector.addEventListener('change', function() {
//   newBackgroundColor = backgroundColorSelector.value;
//   canvas.changeBackground(newBackgroundColor);
// })
canvas.draw()
// canvas.changeResolution(resolutionSelector.value)
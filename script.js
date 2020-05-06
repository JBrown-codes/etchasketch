console.log("Your import worked");

let resolution = 16;

let canvas = {
  draw: function() {
    var canvasContainer = document.getElementById('container');
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
  }
}

canvas.draw()
window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvasWidth = canvas.width = 640;
    canvasHeight = canvas.height = 480;
    id = ctx.getImageData(0, 0, 1, 1);

    var cycles = 10000;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.clearRect(0, 0, 500, 500);
    var id = ctx.getImageData(0, 0, 500, 500);
    var pixels = id.data;

    // for (var i = 0; i < cycles; ++i) {
    for(let x = 0; x < canvasWidth; x++){
        for(let y = 0; y < canvasWidth; y++){
            // var x = Math.floor(Math.random() * canvasWidth);
            // var y = Math.floor(Math.random() * canvasHeight);
            var r = 0;
            var g = 0;
            var b = 0;

            var c = new Color(r, g, b, 255);
            putPixel(id, x, y, c);
            // var off = (y * id.width + x) * 4;
            // pixels[off] = r;
            // pixels[off + 1] = g;
            // pixels[off + 2] = b;
            // pixels[off + 3] = 255;
        }   
    }
    ctx.putImageData(id, 0, 0);
  
};

class Color {
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}

function putPixel(id, x, y, color) {
  var off = (y * id.width + x) * 4;
  id.data[off] = color.r;
  id.data[off + 1] = color.g;
  id.data[off + 2] = color.b;
  id.data[off + 3] = color.a;
}

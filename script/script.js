var t = new Trianglify();

function draw() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var pattern = t.generate(w + 30, h + 30);
  document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
}

window.onresize = function() {
  draw();
}

draw();

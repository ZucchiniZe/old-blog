// Analytics
!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
insertBefore(d,q)}(window,document,'script','_gs');

_gs('GSN-473926-O');

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

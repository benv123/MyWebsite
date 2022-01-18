
function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  // Draw triangle

  ctx.save();
  let time = new Date();
  ctx.translate (time.getMilliseconds(), time.getMilliseconds());
  ctx.rotate(time.getSeconds() + 3);
  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.lineTo(0, 200);
  ctx.lineTo(200, 200);
  ctx.lineTo(100, 50);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(20, 166);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(180, 0);
  ctx.lineTo(180, 166);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(180, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100,160);
  ctx.lineTo(200,200);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100,160);
  ctx.lineTo(0,200);
  ctx.stroke();


ctx.beginPath();
ctx.arc(100, 130, 30, 0, Math.PI * 2, false);
ctx.stroke();
ctx.restore();

ctx.save();
let timer = new Date();
ctx.translate(timer.getMilliseconds(), 0)
ctx.arc(150,150,60,0,Math.PI * 2, false);
ctx.stroke();
ctx.restore();

}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 1)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

  ctx.save();
  ctx.lineWidth = 6;
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

function animate()
{
  requestAnimationFrame(animate);

}


initializeAnimation();
animate();

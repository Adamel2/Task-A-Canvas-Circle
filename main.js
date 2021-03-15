function drawCircleHandle() {
  const circleRadius = document.getElementById("input-radius").value;
  if (!isNaN(circleRadius) && circleRadius < 124 && circleRadius > 0) {
    let circleVolume = (4 * Math.PI * Math.pow(circleRadius, 3)) / 3;
    document.getElementById("output-volume").innerHTML = circleVolume;
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, circleRadius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1;
    ctx.stroke();
  } else {
    alert("Your Radios is Bigger or smaller OR The input isn't Number");
  }
}
function clearDraw() {
  let cSecond = document.getElementById("myCanvas");
  let ctxSecond = cSecond.getContext("2d");
  ctxSecond.clearRect(0, 0, cSecond.width, cSecond.height);
  document.getElementById("output-volume").innerHTML = "";
}
function onLoadingPage() {
  let counter = 1;
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  let looper = setInterval(() => {
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, counter, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1;
    ctx.stroke();
    counter++;
    if (counter > 124) {
      clearInterval(looper);
    }
  }, 1);
}

onLoadingPage();

$("#myForm").submit(function (e) {
  e.preventDefault();
});

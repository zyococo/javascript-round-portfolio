var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(-45deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
downBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(45deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;
    const body = document.querySelector('body');
  
    if (windowWidth < 1300) {
        body.style.height = '50px';
    } else if (windowWidth >= 1300 && windowWidth < 1300) {
        body.style.height = '70px';
    } else {
        body.style.height = '100px';
    }
  });
  
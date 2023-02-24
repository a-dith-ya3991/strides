

var timeConsumed=0;
const name = localStorage.getItem('name');
const number = localStorage.getItem('mobileNumber');
const page2 = localStorage.getItem('page2Time');
console.log(page2);
const nameElement = document.getElementById('name');

if (name) {
  nameElement.textContent = name;
}


var hiddenLink=document.getElementById('hidden-link');
hiddenLink.click=save;

function save() {
  var fs = require('fs');
  var data = [name, number, timeConsumed];
  var filePath = 'C:\\Users\\D SURESH KUMAR REDDY\\Documents\\strides\\login page\\data.csv';
  
  // Add the data to the CSV file
  fs.appendFile(filePath, data.join(',') + '\n', function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Data saved to CSV file');
    }
  });
}




var link = document.querySelector(".link");
document.addEventListener("DOMContentLoaded", function() {
  var startTime = Date.now();
  var timeConsumedValueHours = document.getElementById("time-consumed-value-hours");
  var timeConsumedValueMinutes = document.getElementById("time-consumed-value-minutes");
  var timeConsumedValueSeconds = document.getElementById("time-consumed-value-seconds");
  var brightnessControl = document.getElementById("brightness-control");
  var linkSlider1 = document.getElementById("link-slider-1");
  var linkSlider2 = document.getElementById("link-slider-2");
  var imageWithLink = document.querySelector(".image-with-link");
  
  var image = imageWithLink.querySelector("img");

  var value1 = 0;
  var value2 = 0;
  var b = 0;

  setInterval(function() {
    var timeConsumed = page2+Math.floor((Date.now() - startTime) / 1000);
    var hours = Math.floor(timeConsumed / 3600);
    var minutes = Math.floor((timeConsumed / 60) - (hours * 60));
    var seconds = Math.floor(timeConsumed - (minutes * 60) - (hours * 3600));

    timeConsumedValueHours.innerText = hours;
    timeConsumedValueMinutes.innerText = minutes;
    timeConsumedValueSeconds.innerText = seconds;
  }, 1000);

  linkSlider1.addEventListener("input", function() {
    value1 = linkSlider1.value;
    document.getElementById("print1").innerHTML = "slider 2: " + value1;
  });

  linkSlider2.addEventListener("input", function() {
    value2 = linkSlider2.value;
    document.getElementById("print2").innerHTML = "slider 3: " + value2;
  });

  brightnessControl.addEventListener("input", function() {
    var brightness = brightnessControl.value;
    b = brightness;
    var opacity = 1 - brightness / 100;
    image.style.opacity = opacity;
    document.getElementById("print").innerHTML = "slider 1 : " + b;

    link.style.backgroundColor = "rgba(255, 255, 255, 1)";
    if (b >= 100 && value1 >= 40 && value1 <= 60 && value2 >= 90) {
      link.style.display = "flex";
    } else {
      link.style.display = "none";
    }
  });

  
});

window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById('slider-1');
let sliderTwo = document.getElementById('slider-2');
let displayValOne = document.getElementById('range1');
let displayValTwo = document.getElementById('range2');
let minGap = 0;
let sliderTrack = document.querySelector('.slider-track');
let sliderMaxValue = document.getElementById('slider-1').max;

// Function to update slider 1
function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.value = sliderOne.value;
  fillColor();
}

// Function to update slider 2
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.value = sliderTwo.value;
  fillColor();
}

// Function to update sliders and fill color
function updateSlidersAndFill() {
  sliderOne.value = displayValOne.value;
  sliderTwo.value = displayValTwo.value;
  fillColor();
}

// Event listeners for range inputs
displayValOne.addEventListener('input', updateSlidersAndFill);
displayValTwo.addEventListener('input', updateSlidersAndFill);

// Function to fill color of slider track
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #f9d176 ${percent1}% , #f9d176 ${percent2}%, #dadae5 ${percent2}%)`;
}

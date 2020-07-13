window.addEventListener('load', start);

function start() {
  disabledInput();
  rangeColors();
  eventRange();
}
function eventRange() {
  document.getElementById('rangeR').addEventListener('change', rangeColors);
  document.getElementById('rangeG').addEventListener('change', rangeColors);
  document.getElementById('rangeB').addEventListener('change', rangeColors);
}

function rangeColors() {
  var Red = (document.querySelector('#inputR').value = document.getElementById(
    'rangeR'
  ).value);
  var Gren = (document.querySelector('#inputG').value = document.getElementById(
    'rangeG'
  ).value);
  var Blue = (document.querySelector('#inputB').value = document.getElementById(
    'rangeB'
  ).value);
  document.getElementById(
    'viewRgb'
  ).style.backgroundColor = `rgb(${Red}, ${Gren},${Blue})`;
}
function disabledInput() {
  document.getElementById('inputR').disabled = true;
  document.getElementById('inputG').disabled = true;
  document.getElementById('inputB').disabled = true;
}

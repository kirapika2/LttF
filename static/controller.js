let kaho = 0;
let sayaka = 0;
let rurino = 0;

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && event.code == "KeyK") {
    kaho += 1;
    document.getElementById('kaho_area').textContent = kaho;
  }
  if (kaho == 3) { changeLeftBG(); }

  if (event.ctrlKey && event.shiftKey && event.code == "KeyS") {
    sayaka += 1;
    document.getElementById('sayaka_area').textContent = sayaka;
  }
  if (sayaka == 3) { changeCenterBG(); }

  if (event.ctrlKey && event.shiftKey && event.code == "KeyL") {
    rurino += 1;
    document.getElementById('rurino_area').textContent = rurino;
  }
  if (rurino == 3) { changeRightBG(); }
});

function Reset() {
  kaho = 0;
  sayaka = 0;
  rurino = 0;
  document.getElementById('kaho_area').textContent = kaho;
  document.getElementById('sayaka_area').textContent = sayaka;
  document.getElementById('rurino_area').textContent = rurino;

  var elements = document.getElementsByClassName('class1');
  for (i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#F8B500";
  }

  var elements2 = document.getElementsByClassName('class2');
  for (i = 0; i < elements2.length; i++) {
    elements2[i].style.backgroundColor = "#5383C3";
  }

  var elements3 = document.getElementsByClassName('class3');
  for (i = 0; i < elements3.length; i++) {
    elements3[i].style.backgroundColor = "#E7609E";
  }
}

function changeLeftBG() {
  var elements = document.getElementsByClassName('class1');
  for (i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#ffffff";
  }
}

function changeCenterBG() {
  var elements = document.getElementsByClassName('class2');
  for (i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#ffffff";
  }
}

function changeRightBG() {
  var elements = document.getElementsByClassName('class3');
  for (i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#ffffff";
  }
}

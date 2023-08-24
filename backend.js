function changeBox1Color() {
  var box1 = document.getElementById("box1");
  box1.style.backgroundColor = "#fb8b24";
  box1.style.borderStyle = "groove";
  box1.style.borderColor = "#2ec4b6"
}

function changeBox2Color() {
  var box2 = document.getElementById("box2");
  box2.style.backgroundColor = "#3c096c";
  box2.style.borderStyle = "dotted dashed";
  box2.style.borderColor = "#c44536"
}

function changeBox3Color() {
  var box3 = document.getElementById("box3");
  box3.style.backgroundColor = "#e71d36";
  box3.style.borderStyle = "outset";
  box3.style.borderColor = "#c9184a"
}

function changeAll() {
  var boxes = document.querySelectorAll(".box");
  for (var i =0; i < boxes.length; i++) {
    //Generate random values for each property style
    var bgColor = getRandomColor();
    var borderStyle = getRandomBorderStyle();
    var borderColor = getRandomColor();

    boxes[i].style.backgroundColor = bgColor;
    boxes[i].borderStyle = borderStyle;
    boxes[i].style.borderColor = borderColor
  }
}

//generate random color in hexadecimal format
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i <6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//generate random border style
function getRandomBorderStyle() {
    var borderStyles = ["solid", "dotted", "double", "dashed", "groove", "ridge", "inset", "outset"];
    var randomIndex = Math.floor(Math.random() * borderStyles.length);
    return borderStyles[randomIndex];
}

function hideBox(boxId) {
  let box = document.getElementById(boxId);
  box.style.display = "none";
}

function hideAll() {
  hideBox("box1");
  hideBox("box2");
  hideBox("box3");
}

function resetColors() {
  let boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    box.style.backgroundColor = "#ddd";
    box.style.borderStyle = "solid";
    box.style.borderColor = "#333";
  }
}

function showAll() {
  let boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    box.style.display = "block";
  }
}

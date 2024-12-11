



filterSelection("all")

function filterSelection(c) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    }
  }
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "none";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


// function pickImage(indx) {
//   var bgImageSrc = indx.querySelector('img').src;
//   document.getElementById("resultBox bckgr").style.backgroundImage = `url(${bgImageSrc})`;
//   console.log(bgImageSrc);  
//   console.log(document.getElementById("resultBox bckgr").style.backgroundImage);    
// }

// Show filtered elements
setInterval( () => {
//   console.log('зыыыырь');
//   // let winHeight = $(window).height();     // высота окна
//   // let winWidth = $(window).width();     // ширина окна
//   let winHeight = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
//   // let divHeight = $('.game').height();  // высота блока
//   // let divHeight = document.getElementById('game').clientHeight;
// var divh = document.querySelector('.game').clientHeight;
//   let ratio = winHeight / 10000 ;    // отношение между ними
//   console.log(ratio);
//   document.querySelector('.game').style.transform = `scale(${ratio})`;
 

}, 200);

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = btnContainer.getElementsByClassName("active");
    if (current[0]) {
      current[0].classList.remove("active");
    }
    this.classList.add("active");
  });
}


function pickImageWithoutStyle(index, boxType) {

  let headingID = document.getElementById(`resultBox ${boxType}`);

  headingID.style.backgroundImage = `url('img/${boxType} (${index}).png')`;
  headingID.style.backgroundSize = "contain";
 }

function pickObj(obj,index, hasMenu = false) {

if(obj == 12){ removeObject(9); removeObject(8);}
if(obj == 9){ removeObject(12);}
if(obj == 8){ removeObject(12);}

if(hasMenu == false) {
  headingID = document.getElementById(`resultBox obj${obj}`);
headingID.style.backgroundImage =  `url('img/obj${obj} (${index}).png')`;
headingID.style.backgroundSize = "contain";
}
else{
  const dropdowns = document.getElementById(`styleMenu ${obj}_${index}`);
Array.from(dropdowns).forEach((dropdown) => {
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});
document.getElementById(`styleMenu ${obj}_${index}`).classList.toggle("show");
}
}

function pickStyledObj(obj,index,style) {
    headingID = document.getElementById(`resultBox obj${obj}`);
  headingID.style.backgroundImage =  `url('img/styles/obj${obj} (${style})(${index}).png')`;
  headingID.style.backgroundSize = "contain";
  const dropdowns = document.getElementById(`styleMenu ${obj}_${index}`);
  Array.from(dropdowns).forEach((dropdown) => {
      if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
      }
  });
}
window.onclick = function(event) {
console.log(event.target.alt);         
  if (!event.target.matches('.window')) {
// if (event.target.alt == undefined) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show')) {
openDropdown.classList.remove('show');
}
}
}
else if(event.target )
{

}
}
function removeObject(obj)
{
  headingID = document.getElementById(`resultBox obj${obj}`);
  headingID.style.backgroundImage =  "";
  headingID.style.backgroundSize = "";
}

function mint()
{

}
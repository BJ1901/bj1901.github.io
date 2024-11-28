filterSelection("all")
function filterSelection(c) {
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

function pickImage(index) {

  let headingID = document.getElementById("resultBox bckgr");
  headingID.style.backgroundImage = `url('img/background (${index}).png')`;
  headingID.style.backgroundSize = "contain";
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
  }
  document.getElementById(`myDropdown ${index}`).classList.toggle("show"); 
  
  
  
}
function pickCircle(indexColor) {
  let headingID = document.getElementById("resultBox circle");
  headingID.style.backgroundImage = `url('img/circle (${indexColor}).png')`;
  headingID.style.backgroundSize = "contain";
}

function pickObj(obj,index) {
headingID = document.getElementById(`resultBox obj${obj}`);
headingID.style.backgroundImage =  `url('img/obj${obj} (${index}).png')`;
headingID.style.backgroundSize = "contain";

// const dropdowns = document.getElementsByClassName("dropdown-content");
// Array.from(dropdowns).forEach((dropdown) => {
//     if (dropdown.classList.contains('show')) {
//         dropdown.classList.remove('show');
//     }
// });

// document.getElementById(`myDropdown ${index}`).classList.toggle("show");
}
window.onclick = function(event) {
console.log(event.target.alt);         
//   if (!event.target.matches('.container')) {
if (event.target.alt == undefined) {
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

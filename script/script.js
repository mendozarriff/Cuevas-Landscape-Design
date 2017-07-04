function menu() {
    document.getElementById("hidden-menu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("mobile-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//function opens up project div on desktop screens
function displayProjects(){
  var projects = document.getElementById('project-list');
  projects.style.display = "block";
  var changeSpan = document.getElementById('changeme');
  changeSpan.style.fontSize = "1em";
  changeSpan.style.fontWeight = "bold";
  changeSpan.style.color = "black";
  changeSpan.innerHTML = "-";
  console.log(projects.style);
}
// function hides projects when not hovering
function hideProjects(){
  var hide = document.getElementById('project-list');
  hide.style.display = "none";
  // changes the "+" t0 "-" when cursor hovers projects on the menu
  var changeBack = document.getElementById('changeme');
  changeBack.style.fontSize = "1em";
  changeBack.style.fontWeight = "bold";
  changeBack.style.color = "#009999";
  changeBack.innerHTML = "+";
}
// works in desktop mode - display and hides project names
function chisholm(){
  var display = document.getElementById('chisholm-title')
  display.style.display = "block";
}
function hideChisholm(){
  var hide = document.getElementById('chisholm-title');
  hide.style.display = "none";
}

function ditullo(){
  var display = document.getElementById('ditullo-all-project-names')
  display.style.display = "block";
}
function hideDitullo(){
  var hide = document.getElementById('ditullo-all-project-names');
  hide.style.display = "none";
}

function ethridge(){
  var display = document.getElementById('ethridge-all-project-names')
  display.style.display = "block";
}
function hideEthridge(){
  var hide = document.getElementById('ethridge-all-project-names');
  hide.style.display = "none";
}

function hullings(){
  var display = document.getElementById('hullings-all-project-names')
  display.style.display = "block";
}
function hideHullings(){
  var hide = document.getElementById('hullings-all-project-names');
  hide.style.display = "none";
}

function lischke(){
  var display = document.getElementById('lischke-all-project-names')
  display.style.display = "block";
}
function hideLischke(){
  var hide = document.getElementById('lischke-all-project-names');
  hide.style.display = "none";
}

function weiss(){
  var display = document.getElementById('weiss_all-project-names')
  display.style.display = "block";
}
function hideWeiss(){
  var hide = document.getElementById('weiss_all-project-names');
  hide.style.display = "none";
}
// function removes the hover event on mobile and adds it on desktop
function screenLoad(){
  var w = window.innerWidth;
  if(w > 969){
    var chisholmC = document.getElementById('chisholm-container');
    var ditulloC = document.getElementById('ditullo-container');
    var ethridgeC = document.getElementById('ethridge-container');
    var hullingsC = document.getElementById('hullings-container');
    var lischkeC = document.getElementById('lischke-container');
    var weissC = document.getElementById('weiss-container');

      chisholmC.addEventListener("mouseover", chisholm);
      chisholmC.addEventListener("mouseout", hideChisholm);

      ditulloC.addEventListener("mouseover", ditullo);
      ditulloC.addEventListener("mouseout", hideDitullo);

      ethridgeC.addEventListener("mouseover", ethridge);
      ethridgeC.addEventListener("mouseout", hideEthridge);

      hullingsC.addEventListener("mouseover", hullings);
      hullingsC.addEventListener("mouseout", hideHullings);

      lischkeC.addEventListener("mouseover", lischke);
      lischkeC.addEventListener("mouseout", hideLischke);

      weissC.addEventListener("mouseover", weiss);
      weissC.addEventListener("mouseout", hideWeiss);
  }
}

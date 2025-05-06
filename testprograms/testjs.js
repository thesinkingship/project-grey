var navBar = document.createElement("div");
navBar.id  = "navigation";

navBar.style.height = "30px";
navBar.style.width = "100%";
navBar.style.color = "gainsboro";
navBar.style.display = "flex";
navBar.style.gap = "5px";

var title = document.createElement("div");
title.id = "maintitle"; //why do i need to do the below one wth :(
var titleNode = document.createTextNode("Project Grey");
title.appendChild(titleNode);
navBar.appendChild(title);

var home = document.createElement("div");
home.className = "links"; 
var homeNode = document.createTextNode("Home");
home.appendChild(homeNode);
navBar.appendChild(home);

var about = document.createElement("div");
about.className = "links"; 
var aboutNode = document.createTextNode("About");
about.appendChild(aboutNode);
navBar.appendChild(about);


document.getElementsByTagName("nav")[0].appendChild(navBar);
var navBar = document.createElement("div");
navBar.id  = "navigation";

navBar.style.height = "30px";
navBar.style.width = "100%";
navBar.style.color = "gainsboro";
navBar.style.display = "flex";
navBar.style.gap = "5px";

var navOpenClose = document.createElement("div");
navOpenClose.id = "open-nav";

navOpenClose.style.height = "20px";
navOpenClose.style.width = "20px";
navOpenClose.style.position = "absolute";
navOpenClose.style.top = "9px";
navOpenClose.style.right = "12px";
navOpenClose.style.zIndex = "10";
navOpenClose.style.backgroundColor = "blue";

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
document.getElementsByTagName("body")[0].prepend(navOpenClose);
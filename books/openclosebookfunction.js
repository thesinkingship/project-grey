document.getElementById("currently-open").style.display = "none";
document.getElementsByClassName("pages")[0].style.display = "none";
var getPagesLeft = document.getElementsByClassName("page-left");
var getPagesRight = document.getElementsByClassName("page-right");
var pageOn = 0;
var amtOfPages = getPagesLeft.length - 1; //to account for the whole 'array starts at 0'

function openBook(){
    var toBeShownButton = document.getElementById("currently-open");
    var toBeHiddenButton = document.getElementById("currently-closed");
    var toBeShown = document.getElementsByClassName("pages");
    var toBeHidden = document.getElementsByClassName("cover");
    toBeHiddenButton.style.display = "none";
    toBeShownButton.style.display = "initial";
    toBeHidden[0].style.display = "none";
    toBeShown[0].style.display = "";
    getPagesRight[0].style.display = "";
    getPagesLeft[0].style.display = "";
    for(let i = 1; i < getPagesRight.length; i++) {
        getPagesRight[i].style.display = "none";
    };
    for(let i = 1; i < getPagesLeft.length; i++) {
        getPagesLeft[i].style.display = "none";
    };
    pageOn = 0;
}
function closeBook(){
    var toBeHiddenButton = document.getElementById("currently-open");
    var toBeShownButton = document.getElementById("currently-closed");
    var toBeHidden = document.getElementsByClassName("pages");
    var toBeShown = document.getElementsByClassName("cover");
    pageOn = 0;
    toBeHiddenButton.style.display = "none";
    toBeShownButton.style.display = "initial";
    toBeHidden[0].style.display = "none";
    toBeShown[0].style.display = "";
    
}

function nextPage() {
    pageOn++; // advance page
    if(pageOn > amtOfPages) { //goes past amount of pages
        pageOn--; //undos the advancement of the variable
        return;
    };
    //the below is seaching through the pages to get the desired pair and, if not, not showing them
    for(let i = 0; i < getPagesRight.length; i++) {
        if(i == pageOn){
            getPagesRight[i].style.display = "";
        }
        else {
            getPagesRight[i].style.display = "none";
        }
    };
    for(let i = 0; i < getPagesLeft.length; i++) {
        if(i == pageOn){
            getPagesLeft[i].style.display = "";
        }
        else {
            getPagesLeft[i].style.display = "none";
        }
    };
}

function previousPage() {
    pageOn--;
    if(pageOn < 0) {
        pageOn++;
        closeBook();
        return;
    };
    for(let i = 0; i < getPagesRight.length; i++) {
        if(i == pageOn){
            getPagesRight[i].style.display = "";
        }
        else {
            getPagesRight[i].style.display = "none";
        }
    };
    for(let i = 0; i < getPagesLeft.length; i++) {
        if(i == pageOn){
            getPagesLeft[i].style.display = "";
        }
        else {
            getPagesLeft[i].style.display = "none";
        }
    };
}
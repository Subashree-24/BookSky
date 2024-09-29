//selecting popup and overlay and btn

var popup = document.querySelector(".popup");
var overlay = document.querySelector(".overlay");
var plusbtn = document.querySelector(".addbtn");

plusbtn.addEventListener("click", function(){
    popup.style.display = "block";
    overlay.style.display = "block";
})

//by default, on clicking add or cancel btn in the popup refreshes the page, so in order to prevent this use a function, pass events, in function put, event.peventDefault()

var cancelbtn = document.querySelector("#cancelbook")

cancelbtn.addEventListener("click", function(event){
    event.preventDefault();
    popup.style.display = "none";
    overlay.style.display = "none";
})

//select container, addbook, bkname, bkauthor, bkdescription
var addcontainers = document.querySelector(".container");
var addbook = document.getElementById("addbook");
var bookname = document.getElementById("bkname");
var bookauthor = document.getElementById("bkauthor");
var bookdescription = document.getElementById("bkdescription");

addbook.addEventListener("click", function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML = `<h2>${bookname.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deleteblock(event)">Delete</button>`;
    addcontainers.append(div);
    popup.style.display = "none";
    overlay.style.display = "none";
})

function deleteblock(event){
    event.target.parentElement.remove();
}
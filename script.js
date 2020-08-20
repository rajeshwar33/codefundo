var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName('li');
var deleteBtns=document.getElementsByClassName("delete");
var imp=document.getElementById("first");


imp.onclick=function(event) {
	var x=event.target;
	x.classList.toggle("done")
}

for(var i=0; i<deleteBtns.length; i++)
{
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function removeParent(evt){
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


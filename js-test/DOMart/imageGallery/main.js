function showPic(whicpic){
	var source = whicpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	var text = whicpic.getAttribute("title");
	var description = document.getElementById("description");
	// description.innerHTML = text;  //method 1
	description.childNodes[0].nodeValue = text;  //method 2
}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
	alert(body_element.nodeType);

}

//window.onload = countBodyChildren;
window.onload = init;
function init(){
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	loadPlayList();
}

function handleButtonClick(){
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	if (songName != ""){
		var li = document.createElement("li");
		li.innerHTML = songName;
		var songList = document.getElementById("playlist");
		songList.appendChild(li);
		save(songName);
	}
}



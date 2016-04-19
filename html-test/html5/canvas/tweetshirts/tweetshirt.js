	window.onload=function(){
		var button = $("#previewButton")[0];//document.getElementById("previewButton");
		button.onclick = previewHandler;
		// context.fillRect(10,10,100,100);
		//alert("hello");

	};

	function previewHandler(){
		//alert("preview");
		var canvas = $("#tshirtCanvas")[0];
		var context = canvas.getContext("2d");
		fillBgColor(canvas, context);
		//test(canvas, context);
		//smileFace(canvas, context);
		var selectObj = $("#shape")[0];
		var objIndex = selectObj.selectedIndex;
		var shape = selectObj[objIndex].value;

		//alert("shape");
		if(shape == "squares"){
			for(var squares = 0; squares < 20; squares++){
				drawSquare(canvas, context);
				//alert("hello");			
			}
		} else if(shape == "circles"){
			for(var circles = 0; circles < 20; circles++){
				drawCircle(canvas, context);
			}
		}
		drawText(canvas, context);

	}

	function fillBgColor(canvas, context){
		var selectBgColor = $("#backgroundColor")[0];
		var bgIndex = selectBgColor.selectedIndex;
		var bgColor = selectBgColor[bgIndex].value;
		context.fillStyle = bgColor;
		context.fillRect(0, 0 , canvas.width, canvas.height);
	}

	function drawSquare(canvas, context){
		//alert("draw");
		var w = Math.floor(Math.random() * 40);
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);
		context.fillStyle = "lightblue";
		context.fillRect(x,y,w,w);
	}

	function drawCircle(canvas, context){
		//alert("drawCircle");
		var radius = Math.floor(Math.random() * 30);
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);
		context.beginPath();
		context.arc(x, y, radius, 0, 2*Math.PI, true);
		//context.closePath();
		context.fillStyle = "lightblue";
		context.fill();

	}

	function drawText(canvas,  context){
		var selectObj = document.getElementById("foregroundColor");
		var index = selectObj.selectedIndex;
		var fgColor = selectObj[index].value;

		context.fillStyle = fgColor;
		context.font = "bold 1em sans-serif";
		context.textAlign = "left";
		context.fillText("I saw a Tweet", 20, 40);

		context.textAlign = "right";
		context.fillText("and all I got was this lousy T-shirt!", canvas.width-20, canvas.height-40);

		var twitterBird = new Image();
		twitterBird.src = "twitterBird.png";
		twitterBird.onload = function(){
		context.drawImage(twitterBird, 20, 120, 70, 70);	
		}

		selectObj = document.getElementById("tweets");
		index = selectObj.selectedIndex;
		var text = selectObj[index].text;
		context.font = "italic 1.2em serif";
		context.fillText(text, 30, 100);

		context.font = "bold 1em sans-serif";

		
				
	}

	function updateTweets(tweets){
		var tweetsDiv = document.getElementById("tweets");
		for(var i = 0; i < tweets.length; i++){
			tweet = tweets[i];
			var div = document.createElement("option");
			div.text = tweet.text;
			alert(tweet.text);
			div.value = div.text.replace("\"","'");
			tweetsDiv.options.add(div);
		}
		tweetsDiv.selectedIndex = 0;
	}

	function smileFace(canvas, context){
		context.beginPath();
		context.arc(300, 300, 200, 0, 2*Math.PI, true);
		context.fillStyle = "#ffffcc";
		context.fill();
		//context.stroke();

		context.beginPath();
		context.arc(200, 250, 25, 0, 2*Math.PI, true);
		context.stroke();
		context.beginPath();
		context.arc(400, 250, 25, 0, 2*Math.PI, true);
		context.stroke();

		context.beginPath();
		context.arc(200, 200, 10, 0, 2*Math.PI, true);
		context.fillStyle = "#000000";
		context.fill();
		context.beginPath();
		context.arc(400, 200, 10, 0, 2*Math.PI, true);
		context.fillStyle = "#000000";
		context.fill();

		// context.beginPath();
		// context.moveTo(300, 300);
		// context.lineTo(300, 350);
		// context.closePath();
		// context.stroke();

		context.beginPath();
		context.arc(300, 250, 75, Math.PI/9, 8*Math.PI/9, false);
		context.stroke();




	}
	
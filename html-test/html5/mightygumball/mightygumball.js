var lastReportTime = 0;
window.onload = function(){
	//var url = "http://localhost/html-test/html5/mightygumball/sales.json";
	//url1和url2都跨域了，不能用xmlHttpRequest，应该用JSONP
	//var url1 = "http://gumball.wickedlysmart.com/";
	//var url2 = "https://api.twitter.com/1.1/users/search.json?q=Twitter%20API&page=1&count=3"
	// var request = new XMLHttpRequest();
	// request.open("GET", url1);
	// request.onload = function(){
	// 	if(request.status == 200){
	// 		updateSales(request.responseText);
	// 	}
	// }
	// request.send(null);
	setInterval(handleRefresh, 3000);
}

function handleRefresh(){
	var url = "http://gumball.wickedlysmart.com/" 
	+ "?callback=updateSales" 
	+ "&lastreporttime=" + lastReportTime 
	+ "&random=" + (new Date()).getTime();
	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	newScriptElement.setAttribute("id", "jsonp");

	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if(oldScriptElement == null){
		head.appendChild(newScriptElement);
	}
	else{
		head.replaceChild(newScriptElement,oldScriptElement);//(oldScriptElement).replaceWith(newScriptElement);//
	}
}
function updateSales(sales){
//responseText
//使用JSONP时，执行到updateSales函数时，JSON已经不是字符串形式了，而是一个javascript对象。
	var salesDiv = document.getElementById("sales");//$("#sales")[0];//
	//var sales = JSON.parse(responseText);
	for(var i = 0; i < sales.length; i++){
		var sale = sales[i];
		var div = document.createElement("div");//$('<div></div>');//
		div.setAttribute("class", "saleItem");//div.addClass("saleItem");//
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";//html
		//$("#sales").append(div);//salesDiv.appendChild(div);
		if(salesDiv.childElementCount == 0){
			salesDiv.appendChild(div);
		}
		else{
			salesDiv.insertBefore(div, salesDiv.firstChild);
		}
	}
	if(sales.length>0){
		lastReportTime = sales[sales.length-1].time;
	}
}

function updateTwitter(twitters){
	//var twittersDiv = $("#twitters")[0];
	for(var i = 0; i < twitters.length; i++){
		var twitter = twitters[i];
		var div = $("<div></div>");
		div.html("time " + twitter.created_at);
		$("#twitters").append(div);
	}
}


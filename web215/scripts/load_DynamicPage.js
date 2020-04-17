function pageLoader(pageToLoad){
    var fileToRead = pageToLoad;
    var textRequest = new XMLHttpRequest();
    
	console.log(pageToLoad)
    textRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("main").innerHTML = this.responseText;
        }
    };

    textRequest.open("POST", fileToRead, true);
    textRequest.send();
}


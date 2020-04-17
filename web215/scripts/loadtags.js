dynamicPageLoad();

function dynamicPageLoad() {
    var inputFile = "";

    var xhrequest = new XMLHttpRequest();
    xhrequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            inputFile = xhrequest.responseText;
            var allTagNames = inputFile.split("\n");

            var navLinks = "";

            for (var i = 0; i < allTagNames.length; i++) {
                var currentTag = allTagNames[i];
                console.log(currentTag);
                var tagInfo = currentTag.split("||");
                console.log(i);
                var nameOfTag = tagInfo[0];
                navLinks += '<a href="#' + nameOfTag + '">' + nameOfTag + '</a> || ';
                console.log(nameOfTag);
            }

            document.getElementById("tag").innerHTML = navLinks;

            var details = "";

            for (var i = 0; i < allTagNames.length; i++) {
                var currentTag = allTagNames[i];
                console.log(currentTag);
                var tagInfo = currentTag.split("||");
                console.log(i);

                var tagName = tagInfo[0];
                var tagDefinition = tagInfo[1];
				var tagExample = tagInfo[2];
                var backToTop = tagInfo[3];

                details += '<section><a name = "' + tagName + '"/>' + "<h3>" +
                    tagName + "</h3><br>" + "</a>" +
                    '<p style="padding:0px 60px; margin:0px;">' +
                    tagDefinition + "</p>"+ 
					'<p style="padding:0px 60px; margin:0px;">' +
					tagExample+ "</p>"+
                    '<p style="padding:0px 60px; margin:0px;">' +
                    "</p>"  + "<br><br>" + backToTop +
                    "<hr></section>";
            }

            document.getElementById("tag_desc").innerHTML = details;
        }
    };

    xhrequest.open("GET", "includes/everything_html_tags.txt", true);
    xhrequest.send();
}
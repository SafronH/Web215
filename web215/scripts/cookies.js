// THIS IS THE LATEST AND FINAL COOKIE JS FILE:

function greet() {
    alert("Your scripts are running in Safron's Travel Guide®!");
}

function WriteCookie() {
    var todayIs = new Date();
    todayIs.setMonth(todayIs.getMonth() + 1);
    cookievalue = escape(document.myform.customer.value) + ";"
    document.cookie = "name=" + cookievalue + "expires=" + todayIs.toUTCString() + ";"
        //document.write("Setting Cookies : " + "name=" + cookievalue);
    alert("New Cookie for in Safron's Travel Guide®!\n" + "Cookie Name=" + cookievalue);
}
//**************************************
function ReadCookie() {
    var allcookies = document.cookie;
    //document.write("All Cookies : " + allcookies);
    alert("All Safron's Travel Guide®'s Cookies : " + allcookies);

    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(';');

    // Now take key value pair out of this array
    for (var i = 0; i < cookiearray.length; i++) {
        name = cookiearray[i].split('=')[0];
        value = cookiearray[i].split('=')[1];
        //document.write("Key is : " + name + " and Value is : " + value);
        alert("Key is : " + name + " and Value is : " + value);
    }
}
//***********************DELETE***********
function deleteCookie() {
    var todayIs = new Date();
    todayIs.setMonth(todayIs.getMonth() - 1);
    cookievalue = escape(document.myform.customer.value) + ";"

    document.cookie = "name=" + cookievalue;
    //document.write("Setting Cookies : " + "name=" + cookievalue);
    //alert("Previous Cookies were successfully deleted\n" + "Cookie Name=" + cookievalue);
    var textResult = document.getElementById("printHTMLresults");
    textResult.innerHTML = ("Previous Cookies were successfully deleted\n" + "Cookie Name=" + cookievalue);
}

//******************************** testing
function setCookie2() {
    var date = new Date();
    var CookieExpireIn = 5;
    date.setTime(date.getTime() + (CookieExpireIn * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toGMTString();
    var outputDiv = document.getElementById('inputName');
    var productName = outputDiv.innerHTML;
    document.cookie = 'Product 1 =' + productName + ';' + expires;
    alert("Cookie by KASHI text: " + productName + ", expires in " + expires + " days.")
        //setCookie("Product 2", 'tissot', 30);
}
//********************************** COOKIES LOADING************
function createCookieLoad(cookieName, cookieValue, daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}

function accessCookie(cookieName) {
    var cName = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for (var i = 0; i < allCookieArray.length; i++) {
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(cName) == 0)
            return temp.substring(cName.length, temp.length);
    }
    return "";
}

function checkCookieLoad() {
    var user = accessCookie("testCookie");
    if (user != "")
        alert("Welcome Back " + user + "!!!");
    else {
        user = prompt("Please enter your Name");
        num = prompt("How many days you want to store your Name on your computer?");
        if (user != "" && user != null) {
            createCookieLoad("testCookie", user, num);
        }
    }
}

/*************  how to print results in html usin js    ******************/
/*function printHTMLresults() {
    var headline = document.getElementById("printHTML");
    headline.innerHTML = "Wow! Safron's Travel Guide® is great!";
}*/
function xhrCallBack(){
    if (xhr.readyState == 4 && xhr.status == 200){
        var theHTML = "";
        data = JSON.parse(xhr.responseText);
        for(var i = 0; i < data.length; i++) {
            theHTML += data[i].content + data[i].username + "<br>";
        }
        document.getElementById("messages").innerHTML = theHTML;    
    }
}
 
function parse() {
    xhr = new XMLHttpRequest();
    xhr.open("get", "data.json", true);
    xhr.onreadystatechange = xhrCallBack;
    xhr.send();
}
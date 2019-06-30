document.getElementById("hashQuery").addEventListener("submit", submitFunction);

function submitFunction(event) {
    let hash = document.getElementById("hash")["value"];
    console.log(hash);
    let hashType = document.getElementById("hashType")["value"];
    console.log(hashType);

    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    console.log(this.response[0]);
	    if(this.response[0]["md5"] != "hash does not exist") {
	    document.getElementById("results").innerHTML = "<ul id='resultsList'><li>MD5: " + this.response[0]["md5"] +
		"</li><li>SHA1: " + this.response[0]["sha1"] + "</li><li>File Name: " + this.response[0]["fileName"] +
		    "</li><li>File Size: " + JSON.stringify(this.response[0]["fileSize"]) + "</ul>";
	    } else {
		document.getElementById("results").innerHTML = "<ul><li>Hash does not exist in database</li></ul>";
	    }
	}
    };
    let endpoint = "/hashes"
    let query = "hash=" + hash + "&hashType=" + hashType;
    
    http.open('GET', endpoint+"/?"+query, true);
    http.send();

}

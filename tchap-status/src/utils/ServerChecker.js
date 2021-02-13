export function isOnline(url, callback) {
	// try to load favicon
	let timer = setTimeout(function(){
		// timeout after 5 seconds
		callback(false);
	},5000)
	let img = document.createElement("img");
	img.onload = function() {
		clearTimeout(timer);
		callback(true);
	}
	img.onerror = function() {
		clearTimeout(timer);
		callback(false);
	}
	img.src = url;
}

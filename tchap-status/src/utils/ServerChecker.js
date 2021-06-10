export function isServerOnline(url, type) {
	switch (type) {
		case 'img':
			return new Promise(resolve => {
				const timer = setTimeout(() => {
					resolve(false);
				},5000);
				let img = document.createElement("img");
				img.onload = () => {
					clearTimeout(timer);
					resolve(true);
				}
				img.onerror = () => {
					clearTimeout(timer);
					resolve(false);
				}
				img.src = url;
			});
			break;
		case 'rest':
		default:
			return new Promise(resolve => {
				const timer = setTimeout(() => {
					resolve(false);
				}, 5000);
				fetch(url).then(() => {
					clearTimeout(timer)
					resolve(true);
				}).catch(() => {
					clearTimeout(timer)
					resolve(false);
				});
			});
			break;
	}
}


export function isServerOnline(url, type) {
	switch (type) {
		case 'img':
			return new Promise(resolve => {
				const start = Date.now();
				const timer = setTimeout(() => {
					resolve({
						isUp: false,
						duration: Date.now() - start,
						error: "timeout",
					});
				}, 10000);
				let img = document.createElement("img");
				img.onload = () => {
					clearTimeout(timer);
					resolve({
						isUp: true,
						duration: Date.now() - start,
						error: null,
					});
				}
				img.onerror = (err) => {
					clearTimeout(timer);
					resolve({
						isUp: false,
						duration: Date.now() - start,
						error: err.message,
					});
				}
				img.src = url;
			});
			break;
		case 'rest':
		default:
			return new Promise(resolve => {
				const start = Date.now();
				const timer = setTimeout(() => {
					resolve({
						isUp: false,
						duration: Date.now() - start,
						error: "timeout",
					});
				}, 10000);
				fetch(url).then(() => {
					clearTimeout(timer);
					resolve({
						isUp: true,
						duration: Date.now() - start,
						error: null,
					});
				}).catch((err) => {
					clearTimeout(timer);
					resolve({
						isUp: false,
						duration: Date.now() - start,
						error: err.message,
					});
				});
			});
			break;
	}
}


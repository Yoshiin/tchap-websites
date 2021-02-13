window.onscroll = function() { onScroll() };

function onScroll() {
	let goToTopBtn = document.getElementById("goToTopBtn");
	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		goToTopBtn.style.display = "block";
	} else {
		goToTopBtn.style.display = "none";
	}
}

function goToTop() {
	document.body.scrollTo({ top: 0, behavior: 'smooth' }) // For Safari
	document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }) // For Chrome, Firefox, IE and Opera
}

function searchItems() {
	let searchTerm = document.getElementById("tc_HeaderBar_searchInput").value.trim();
	let context = document.querySelectorAll(".searcheable");
	let instance = new Mark(context);
	let markOpts = {
		"className": "markedElement",
		"ignorePunctuation": ":;.,-–—(){}[]!’'\"".split("")
	};

	instance.unmark();

	if (searchTerm !== "") {
		document.getElementsByClassName('tc_HeaderBar_search_clear')[0].classList.remove("itemHide");
		[...document.getElementsByClassName('searcheable')].forEach((el) => {
			el.classList.add('notMarkedElement');
		});
		instance.mark(searchTerm, markOpts);
	} else {
		document.getElementsByClassName('tc_HeaderBar_search_clear')[0].classList.add("itemHide");
		[...document.getElementsByClassName('searcheable')].forEach((el) => {
			el.classList.remove('notMarkedElement');
		});
	}

}

function clearSearch() {
	let context = document.querySelectorAll(".searcheable");
	let instance = new Mark(context);
	instance.unmark();
	document.getElementsByClassName('tc_HeaderBar_search_clear')[0].classList.add("itemHide");
	[...document.getElementsByClassName('searcheable')].forEach((el) => {
		el.classList.remove('notMarkedElement');
	})
	document.getElementById("tc_HeaderBar_searchInput").value = '';
}





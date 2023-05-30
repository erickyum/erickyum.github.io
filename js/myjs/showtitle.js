document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);

var position = $(window).scrollTop();
//响应pjax
function tonav() {
	document.getElementsByClassName("name-cont")[1].setAttribute("style", "display:none");
    
    document.getElementById("page-name").textContent = document.title;
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > position) {

			document.getElementsByClassName("name-cont")[1].setAttribute("style", "");
			document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");
		} else {
			document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
			document.getElementsByClassName("name-cont")[1].setAttribute("style", "display:none!important");
		}
		position = scroll;
	});
	
}

function scrollToTop() {
	document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
	document.getElementsByClassName("name-cont")[1].setAttribute("style", "display:none");
	btf.scrollToDest(0, 500);
}


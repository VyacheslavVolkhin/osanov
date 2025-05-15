document.addEventListener("DOMContentLoaded", function() {


	// Popups
	let popupCurrent;
	let popupsList = document.querySelectorAll('.popup-outer-box')
	
	document.querySelectorAll(".js-popup-open").forEach(function (element) {
	  element.addEventListener("click", function (e) {
		document.querySelector(".popup-outer-box").classList.remove("active");
		document.body.classList.add("popup-open");
	
		popupCurrent = this.getAttribute("data-popup");
		document
		  .querySelector(
			`.popup-outer-box[id="popupCurrent"
			]`
		  )
		  .classList.add("active");
	
		e.preventDefault();
		e.stopPropagation();
		return false;
		});
	});
	document.querySelectorAll(".js-popup-close").forEach(function (element) {
	  element.addEventListener("click", function (event) {
		document.body.classList.remove("popup-open");
		for (i=0;i<popupsList.length;i++) {
			popupsList[i
				].classList.remove("active");
			}
		event.preventDefault();
		event.stopPropagation();
		});
	});
	document.querySelectorAll(".popup-outer-box").forEach(function (element) {
	  element.addEventListener("click", function (event) {
		if (!event.target.closest(".popup-box")) {
		  document.body.classList.remove("popup-open");
		  document.body.classList.remove("popup-open-scroll");
		  document.querySelectorAll(".popup-outer-box").forEach(function (e) {
			e.classList.remove("active");
				});
		  return false;
			}
		});
	});
	
	
})
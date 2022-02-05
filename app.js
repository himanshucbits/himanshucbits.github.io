const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const service = document.querySelectorAll(".f-item");
const back = document.querySelectorAll(".back");
const f_text = document.querySelectorAll(".f-text");

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#191f3a';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

service[0].addEventListener("mouseenter", ()=>{
	back[0].classList.add("select");
	f_text[0].classList.add("select");
});

service[0].addEventListener("mouseleave", ()=>{
	back[0].classList.remove("select");
	f_text[0].classList.remove("select");

});

service[1].addEventListener("mouseenter", ()=>{
	back[1].classList.add("select");
	f_text[1].classList.add("select");
});

service[1].addEventListener("mouseleave", ()=>{
	back[1].classList.remove("select");
	f_text[1].classList.remove("select");
});

service[2].addEventListener("mouseenter", ()=>{
	document.querySelectorAll(".back")[2].classList.add("select");
	f_text[2].classList.add("select");
});

service[2].addEventListener("mouseleave", ()=>{
	back[2].classList.remove("select");
	f_text[2].classList.remove("select");
});

service[3].addEventListener("mouseenter", ()=>{
	back[3].classList.add("select");
	f_text[3].classList.add("select");
});

service[3].addEventListener("mouseleave", ()=>{
	back[3].classList.remove("select");
	f_text[3].classList.remove("select");
});

document.addEventListener("scroll", ()=>{
	var scroll = window.scrollY;
	if(scroll > 1500 && scroll < 1900){
		for(i=0; i<2; i++){
			document.querySelectorAll(".menu-item")[i].classList.add("scroll");
		}
    }
	else if(scroll > 1900 && scroll < 2100){
		document.querySelectorAll(".menu-item")[2].classList.add("scroll");
	}
	else if(scroll > 2100 && scroll < 2500){
		document.querySelectorAll(".menu-item")[3].classList.add("scroll");
	}
	else if(scroll > 2500){
		document.querySelectorAll(".menu-item")[4].classList.add("scroll");
	}
    else{
		for(i=0; i<5; i++){
			document.querySelectorAll(".menu-item")[i].classList.remove("scroll");
		}
    }
})

document.addEventListener('scroll', () => {
	var enter = window.scrollY;
	if (enter > 3200) {
		document.querySelector(".about-img").classList.add("enter");
		document.querySelector(".about-text").classList.add("enter");
	} else {
		document.querySelector(".about-img").classList.remove("enter");
		document.querySelector(".about-text").classList.remove("enter");
	}
});

document.addEventListener('scroll', () => {
	var start = window.scrollY;
	if (start > 600) {
		for(i=0; i<4; i++)
		document.querySelectorAll(".f-item")[i].classList.add("start");
	} else {
		for(i=0; i<4; i++)
		document.querySelectorAll(".f-item")[i].classList.remove("start");
	}
});

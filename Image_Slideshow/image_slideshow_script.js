
function imageChanger(){

	var slideshow = document.getElementById("slideshow");
	var img_src = slideshow.getAttribute("src");
	var current_img = img_src.substring(img_src.lastIndexOf("/")+4, img_src.lastIndexOf("/")+5);

	if(current_img == 5){
		current_img = 0;
	}

	slideshow.setAttribute("src", "Images/img" + (Number(current_img) + 1) + ".jpg");


}

var interval_id;

function startSlideShow(){

	var timer = document.getElementById("timer").value;
	interval_id = setInterval(imageChanger, timer);
}

function stopSlideShow(){

	clearInterval(interval_id);
}
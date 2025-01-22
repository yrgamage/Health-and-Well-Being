// Change the font size of the displayed text
function fontChange(size){
	document.getElementById("description").style.fontSize = size + "px";
}


// Change the background colour of the html page
function backgroundchange(bgColor) {
	document.body.style.backgroundColor = bgColor.value;
}


// Generate random colours
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


// Change background colour with random colours
function randomChange(){
	document.body.style.backgroundColor = getRandomColor();
}


// Display image and the image description when hovering
function display(image){
	let largeImg = document.getElementById("expandedImage");
	largeImg.src = image.src;

    if (image.id == "picture1"){						
		document.getElementById("description").innerHTML = document.getElementById("pic1Para").innerHTML;			
	}else if(image.id == "picture2"){
	document.getElementById("description").innerHTML = document.getElementById("pic2Para").innerHTML;
	}else if(image.id == "picture3"){
		document.getElementById("description").innerHTML = document.getElementById("pic3Para").innerHTML;
	}else if(image.id == "picture4"){
		document.getElementById("description").innerHTML = document.getElementById("pic4Para").innerHTML;
	}else if(image.id == "picture5"){
		document.getElementById("description").innerHTML = document.getElementById("pic5Para").innerHTML;
	}else if(image.id == "picture6"){
		document.getElementById("description").innerHTML = document.getElementById("pic6Para").innerHTML;
	}else if(image.id == "picture7"){
		document.getElementById("description").innerHTML = document.getElementById("pic7Para").innerHTML;
	}else if(image.id == "picture8"){
		document.getElementById("description").innerHTML = document.getElementById("pic8Para").innerHTML;
	}else {
		document.getElementById("description").innerHTML = "";
    }
	
    largeImg.parentElement.style.display = "block";
}


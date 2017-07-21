console.log('testing');
var scrollY = 0;
var distance = 40;
var speed = 24;

function autoScrollTo(el) {
	//window.scrollTo(0, 0);
	
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')', speed);
	
	if (yPos < 1000) {
		console.log('done');
		clearTimeout (animator);
	}
	else {
		if(currentY > targetY - distance) {
			scrollY = currentY - distance;
			window.scroll(0, scrollY);
		}
		else {
			clearTimeout(animator);
		}
	}
}
var open = false;
var open_2 = false;
function toggle_map (map_id) {
	if (map_id == 'map_1') {
		if (open == false && open_2 == true) {
			open = true;
			open_2 == false;
			document.getElementById('map_iframe').style.height = '550px';
			document.getElementById('map_image').style.height = '0px';
		}
		else if (open == false) {
			open = true;
			document.getElementById('map_iframe').style.height = '550px';
			console.log('open map');
		}
		else if (open == true) {
			open = false;
			console.log('close map');
			document.getElementById('map_iframe').style.height = '0px';
		}
	}
	else if (map_id == 'map_2') {
		if (open_2 == false && open == true) {
			open_2 = true;
			open = false;
			document.getElementById('map_iframe').style.height = '0px';
			document.getElementById('map_image').style.height = '550px';
		}
		else if (open_2 == false) {
			open_2 = true;
			document.getElementById('map_image').style.height = '550px';
			console.log('open map');
		}
		else if (open_2 == true) {
			open_2 = false;
			console.log('close map');
			document.getElementById('map_image').style.height = '0px';
		}
	}
}
//scroll test 2
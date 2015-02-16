
var smoothScrollLib = (function(){

var anchor_tags = document.querySelectorAll('a[href^="#"]');
	for(var i=0;i<anchors.length;i++){
		if(anchors[i].getAttribute('href')!="#"){
			anchor[i].addEventListener('click',function(e){
				e.preventDefault();
				var div_id = this.getAttribute('href').substr(1);
				smoothScroll(div_id);
			});
		}
	}


function smoothScroll(id){ //ID is the target id , kahan jana.
	var currentY = window.scrollY;
	var elY = document.getElementById(id).offsetTop();
	var diff = currentY > elY > -10:10;

	var myInterval = setInterval(function(){
		if(window.scrollY < elY && window.scrollY+10>elY){
			clearInterval(myInterval);
		}
		window.scrollTo(window.scrollX,window.scrollY-diff);

	},100);
}
})();
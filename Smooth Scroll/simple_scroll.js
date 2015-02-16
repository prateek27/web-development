var scrollToTop = (function(){
	return {
		init:function(id){
			document.getElementById(id).addEventListener('click',function(e){
				e.preventDefault();
				var diff = 5;
				var myInterval = setInterval(function(){
					if(window.scrollY<=0){
						clearInterval(myInterval);
					}
					window.scrollTo(window.scrollX,window.scrollY-diff);
					diff*=2;
				},50);
			});

		}
	};
})();

window.addEventListener('load',scrollToTop.init.bind(null,'scroll_top'));
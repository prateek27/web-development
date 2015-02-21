
var page = (function(){
	
	var page_name=null;
	var nextURL = null;

	function fetch_photos(){
	 console.log("aur bhi hain ...");
	console.log(page_name);
	console.log(nextURL);
	var req = new XMLHttpRequest();
	var resp = null;
	req.open("GET",nextURL,true);
	req.responseType = "json";
	req.send();
	

	req.addEventListener('load',function(){
		resp = this.response;
		
		var ps = document.getElementById('photos_section');
		nextURL = this.response.paging.next;
		//console.log(resp.data);
		
		/*for(var i=0;i<resp.data.length;i++){
			for(var j=0;j<resp.data[i].images.length;j++){
				var photo = document.createElement("img");
				photo.src = resp.data[i].images[j].source;
				photo.width = resp.data[i].images[j].width;
				photo.height = resp.data[i].images[j].height;
				ps.appendChild(photo); 
			}
		}*/
		for(var i=0;i<resp.data.length;i++){
				
				var photo = document.createElement("img");
				photo.src = resp.data[i].source;
				photo.width = resp.data[i].width;
				photo.height = resp.data[i].height;
				photo.classList.add = "photo";
				ps.appendChild(photo); 
			
			}
		
		}); 
	}


return {
		init:function(){
			 page_name = document.getElementById('url').value;
			
			nextURL = "https://graph.facebook.com/"+page_name+"/photos/uploaded";
			fetch_photos();
	
	window.addEventListener('scroll',function(){
	var yLeftToGo = document.body.offsetHeight - (window.pageYOffset + window.innerHeight);
	console.log(yLeftToGo);
	if(yLeftToGo<=0){
		fetch_photos();
	}

	});
		
		}
	}
		
})();

//this.response.paging.next

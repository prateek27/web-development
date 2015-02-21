
var page = (function(){



return {
	fetch_photos:function(){
	var page_name = document.getElementById('url').value; 
	console.log(page_name);
	var url = "https://graph.facebook.com/"+page_name+"/photos"; 
	var req = new XMLHttpRequest();
	var resp = null;
	req.open("GET",url,true);
	req.responseType = "json";
	req.send();
	req.addEventListener('load',function(){
		resp = this.response;
		var ps = document.getElementById('photos_section');
		//console.log(resp.data);
		
		for(var i=0;i<resp.data.length;i++){
			for(var j=0;j<resp.data[i].images.length;j++){
				var photo = document.createElement("img");
				photo.src = resp.data[i].images[j].source;
				photo.width = resp.data[i].images[j].width;
				photo.height = resp.data[i].images[j].height;
				ps.appendChild(photo); 
			}
		}
	
	}); 


		}
	}
		
})();
var game = (function(){
var game_matrix = [];
var rows;
var cols;

function reset_matrix(){

	for(i=0;i<rows;i++){
		game_matrix.push([]);
	}
	for(i=0;i<rows;i++){
		for(j=0;j<cols;j++){
			game_matrix[i][j] = 0;
		}
	}
},
function getRandomPositon(){
	var empty_pos = [];

	for(i=0;i<rows;i++){
		for(j=0;j<cols;j++){
			if(game_matrix[i][j] === 0)
				empty_pos.push()
		}
	}

},
function getRandomNumber(){
	var r = Math.random();
	console.log(r);
	if(r > 0.2){
		return 2;
	}
	else{ 
		return 4;
	}
}


return{
	init:function(){

	rows = 4;
	cols = 4;
	reset_matrix();

		
		console.log(game_matrix)
		console.log("\n");
	}
};

})();
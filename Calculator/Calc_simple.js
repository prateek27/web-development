
var keys=document.querySelectorAll('#calculator span');

//Add onclick event
for(var i=0;i<keys.length;i++){
  keys[i].onclick=function(e){
  var input=document.querySelector('.screen');
  var inputVal=input.innerHTML;
  var btnVal=this.innerHTML;
  
 
   
  if(btnVal=='C')
		input.innerHTML='';
  if(btnVal=='='){
  var equation = inputVal;
  equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
  if(equation)
      input.innerHTML=eval(equation);
}	  
  else
  {
  input.innerHTML+=btnVal;
  }
}
}

/*	1.No two operator should occur simultaneously
// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
	*/
function updateOutput() { 
		//get form
	var form = document.getElementById("calc");
		//get output
	var out = form.elements["z"];
		//get two numbers
	var num1 = parseInt(form.elements["x"].value);
		//get operator
	var operator = parseInt(form.elements["op"].value);
		//set output depending on operator
	switch(operator)
	{
		//add
		case 0:
		out.value = num1 * 0.23;
	  	break;
	  	//subtract
		case 1: out.value = num1 * 1.23;
		break;
		
		default:
	  	break;
	}
}
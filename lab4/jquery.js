$(document).ready(function () {
	function myfunction1(level,elements) {
		for (var i = 0; i < elements.length; i++) {
			elmnt3=document.getElementById(elements[i].id);
			if (parseInt(elmnt3.style.left)<parseInt("880px"))
			{
				if (elmnt3.style.top==level){
					return true;
				}
			}
		}
		return false
	};
	function myfunction2(level,elements){
		for (var i = 0; i < elements.length; i++) {
			elmnt3=document.getElementById(elements[i].id);
			if (parseInt(elmnt3.style.left)<parseInt("880px"))
				{
				if (parseInt(elmnt3.style.top)<parseInt(level)){
					
					elmnt3.classList.add("transitionclass");
					elmnt3.style.top=parseInt(elmnt3.style.top)+135+"px";
					setTimeout(function(){
						elmnt3.classList.remove("transitionclass");
					  }, 500);
				}
			}
		}
	}
	function myfunction3(level,elements){
		if(clickedlevel==-1)
		{
			if(level=="700px"){
				for (var i = 0; i < elements.length; i++) {
					elmnt3=document.getElementById(elements[i].id);
					if (parseInt(elmnt3.style.left)==parseInt("577px")){
						if (parseInt(elmnt3.style.top)<=parseInt("700px"))
						{
							elmnt3.classList.add("transitionclass");
							elmnt3.style.top=parseInt(elmnt3.style.top)-135+"px";
							setTimeout(function(){
								elmnt3.classList.remove("transitionclass");
							  }, 500);
							  
						}
					}
				}
				clickedlevel=5;
			}
			else
			if(level=="565px"){
				for (var i = 0; i < elements.length; i++) {
					elmnt3=document.getElementById(elements[i].id);
					if (parseInt(elmnt3.style.left)==parseInt("577px")){
						if (parseInt(elmnt3.style.top)<=parseInt("565px"))
						{
							elmnt3.classList.add("transitionclass");
							elmnt3.style.top=parseInt(elmnt3.style.top)-135+"px";
							setTimeout(function(){
								elmnt3.classList.remove("transitionclass");
							  }, 500);
						}
					}
				}
				clickedlevel=4;
			}
			else
			if(level=="430px"){
				for (var i = 0; i < elements.length; i++) {
					elmnt3=document.getElementById(elements[i].id);
					if (parseInt(elmnt3.style.left)==parseInt("577px")){
						if (parseInt(elmnt3.style.top)<=parseInt("430px"))
						{
							elmnt3.classList.add("transitionclass");
							elmnt3.style.top=parseInt(elmnt3.style.top)-135+"px";
							setTimeout(function(){
								elmnt3.classList.remove("transitionclass");
							  }, 500);
						}
					}
				}
				clickedlevel=3;
			}
			else
			if(level=="295px"){
				for (var i = 0; i < elements.length; i++) {
					elmnt3=document.getElementById(elements[i].id);
					if (parseInt(elmnt3.style.left)==parseInt("577px")){
						if (parseInt(elmnt3.style.top)<=parseInt("295px"))
						{
							elmnt3.classList.add("transitionclass");
							elmnt3.style.top=parseInt(elmnt3.style.top)-135+"px";
							setTimeout(function(){
								elmnt3.classList.remove("transitionclass");
							  }, 500);
						}
					}
				}
				clickedlevel=2;
			}
			else
			if(level=="160px"){
				for (var i = 0; i < elements.length; i++) {
					elmnt3=document.getElementById(elements[i].id);
					if (parseInt(elmnt3.style.left)==parseInt("577px")){
						if (parseInt(elmnt3.style.top)<=parseInt("160px"))
						{
							elmnt3.classList.add("transitionclass");
							elmnt3.style.top=parseInt(elmnt3.style.top)-135+"px";
							setTimeout(function(){
								elmnt3.classList.remove("transitionclass");
							  }, 500);
						}
					}
				}
				clickedlevel=1;
			}

		}
		else
		if(clickedlevel>(parseInt(level)-25)/67.5/2){
			clickedlevel-=1;
			for (var i = 0; i < elements.length; i++) {
				elmnt3=document.getElementById(elements[i].id);
				if (parseInt(elmnt3.style.left)<parseInt("880px")){
					if (parseInt(elmnt3.style.top)==parseInt(level))
					{
						elmnt3.classList.add("transitionclass");
						elmnt3.style.top=parseInt(elmnt3.style.top)+135+"px";
						setTimeout(function(){
							elmnt3.classList.remove("transitionclass");
						  }, 500);
					}
				}
			}
		}
		else
		if(clickedlevel<(parseInt(level)-25)/67.5/2){
		{
			clickedlevel+=1;
			for (var i = 0; i < elements.length; i++) {
				elmnt3=document.getElementById(elements[i].id);
				if (parseInt(elmnt3.style.left)<parseInt("880px")){
					if (parseInt(elmnt3.style.top)==parseInt(level))
					{
						elmnt3.classList.add("transitionclass");
						elmnt3.style.top=parseInt(elmnt3.style.top)-135+"px";
						setTimeout(function(){
							elmnt3.classList.remove("transitionclass");
						  }, 500);
					}
				}
			}
		}
	}}
	var elmnt,
		pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0,
		clickedlevel=0,
		idclicked="div1";
{
	getlevels=document.getElementById("div1");
	getlevels.style.left=577+"px";
	getlevels.style.top=25+"px";


	getlevels=document.getElementById("div2");
	getlevels.style.left=577+"px";
	getlevels.style.top=160+"px";

	getlevels=document.getElementById("div3");
	getlevels.style.left=577+"px";
	getlevels.style.top=295+"px";

	getlevels=document.getElementById("div4");
	getlevels.style.left=577+"px";
	getlevels.style.top=430+"px";

	getlevels=document.getElementById("div5");
	getlevels.style.left=577+"px";
	getlevels.style.top=565+"px";

	getlevels=document.getElementById("div6");
	getlevels.style.left=577+"px";
	getlevels.style.top=700+"px";
}
	function dragMouseDown(e) {
		e.preventDefault();
		// get the mouse cursor position at startup:
		idclicked=e.target.id;
		elmnt = document.getElementById(idclicked);
		if(parseInt(elmnt.style.left)>parseInt("880px")){
			clickedlevel=-1;
		}
		else
		if(elmnt.style.top==parseInt("25px")){
			clickedlevel=0;
		}
		else
		if(elmnt.style.top=="160px"){
			clickedlevel=1;
		}
		else
		if(elmnt.style.top=="295px"){
			clickedlevel=2;
		}
		else
		if(elmnt.style.top=="430px"){
			clickedlevel=3;
		}
		else
		if(elmnt.style.top=="565px"){
			clickedlevel=4;
		}
		else
		if(elmnt.style.top=="700px"){
			clickedlevel=5;
		}
		elmnt.classList.remove("transitionclass");
		pos3 = e.pageX;
		pos4 = e.pageY;
		console.log("hey",e.target.id);
		$(document).mousemove(elementDrag);
		$(document).mouseup(closeDragElement);
		// call a function whenever the cursor moves:
	}
	function elementDrag(e) {
		e.preventDefault();
		pos1 = pos3 - e.pageX;
		pos2 = pos4 - e.pageY;
		pos3 = e.pageX;
		pos4 = e.pageY;
		// set the element's new position:
		elmnt.style.top=e.pageY-15+pos2+"px";
		elmnt.style.left=e.pageX-15+pos1+"px";
		if (parseInt(elmnt.style.left)>parseInt("880px"))
		{	
			if(clickedlevel!=-1){
				clickedlevel=-1;
				if(myfunction1("700px",elements)==false){
					myfunction2("700px",elements);
				}
				{
					if(myfunction1("565px",elements)==false){
						myfunction2("565px",elements);
					}
					{
						if(myfunction1("430px",elements)==false){
							myfunction2("430px",elements);
							
						}
						{
							if(myfunction1("295px",elements)==false){
								myfunction2("295px",elements);
							}
							{
								if(myfunction1("160px",elements)==false){
									myfunction2("160px",elements);
								}

							}
						}
					}
				}
			}

		}
		else{
			if(parseInt(elmnt.style.top)>parseInt("10px") &&parseInt(elmnt.style.top)<parseInt("92.5px"))
			{
				//go low
				myfunction3("25px",elements);
			}
			else
			if(parseInt(elmnt.style.top)>parseInt("92.5px") &&parseInt(elmnt.style.top)<parseInt("227.5px"))
			{
				//go low
				myfunction3("160px",elements);
			}		
			else
			if(parseInt(elmnt.style.top)>parseInt("227.5px") &&parseInt(elmnt.style.top)<parseInt("362.5px"))
			{//go low
				
				myfunction3("295px",elements);
			}							
			else
			if(parseInt(elmnt.style.top)>parseInt("362.5px") &&parseInt(elmnt.style.top)<parseInt("497.5px"))
			{
				myfunction3("430px",elements);
			}
			else
			if(parseInt(elmnt.style.top)>parseInt("497.5px") &&parseInt(elmnt.style.top)<parseInt("632.5px"))
			{
				
				myfunction3("565px",elements);
			}
			else
			if(parseInt(elmnt.style.top)>parseInt("632.5px") &&parseInt(elmnt.style.top)<parseInt("780px"))
			{
				
				myfunction3("700px",elements);
			}


		}
	}
	function closeDragElement(e) {
		// stop moving when mouse button is released:
		if (parseInt(elmnt.style.left)<parseInt("880px")){
			elmnt.classList.add("transitionclass");
			elmnt.style.left="577px";
			if(myfunction1("700px",elements)==false){
				elmnt.style.top="700px";
			}
			else{
				if(myfunction1("565px",elements)==false){
					elmnt.style.top="565px";
				}
				else{
					if(myfunction1("430px",elements)==false){
						elmnt.style.top="430px";
						
					}
					else{
						if(myfunction1("295px",elements)==false){
							elmnt.style.top="295px";
						}
						else{
							if(myfunction1("160px",elements)==false){
								elmnt.style.top="160px";
							}
							else{
								if(myfunction1("25px",elements)==false){
									elmnt.style.top="25px";
								}

						}}}}}
			setTimeout(function(){
				elmnt.classList.remove("transitionclass");
			  }, 500);
		}

		$(document).unbind();
	}

	elements = document.getElementsByClassName("object");
	$(".object").mousedown(dragMouseDown);

});

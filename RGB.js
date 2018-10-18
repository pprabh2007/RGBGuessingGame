function init_color_blocks()
{
	var list=document.querySelectorAll(".colors");
	for(var i=0; i<list.length; i++)
	{
		list[i].addEventListener("click", color_click);
	}
}

function change_on_hover()
{
	this.classList.add("cc");	
}

function restore_back_after_hover()
{
	this.classList.remove("cc");
}

function init_easy()
{
	if(conclusion==true)
	{
		conclusion=false;
		new_col_button.textContent="New Colors";
		init_color_blocks();
	}

	outerdiv_elem.style.backgroundColor=orig_state;
	center_message.textContent="Welcome!";

	if(level)
	{
			var row=document.querySelector("#row2");
			var list=document.querySelectorAll("#row2 .colors");

			for(var i=0; i<list.length; i++)
			{
				list[i].classList.remove("colors");
				list[i].removeEventListener("click", color_click);
				list[i].style.backgroundColor=orig_back;
			}

	}
	level=false;
	
	var list=document.querySelectorAll(".colors");
	var random_srno=Math.floor((Math.random()*3));

	for(var i=0; i<3; i++)
	{
		var r=Math.floor((Math.random()*256));
		var g=Math.floor((Math.random()*256));
		var b=Math.floor((Math.random()*256));

		if(i==random_srno)
		{
			targetCID=list[i].id;
			data.textContent="RGB("+r+", "+g+", "+b+")";
		}

		list[i].style.backgroundColor="rgb("+r+", "+g+", "+b+")";
	}
}

function init_hard()
{
	if(conclusion==true)
	{
		conclusion=false;
		new_col_button.textContent="New Colors";
		init_color_blocks();
	}

	center_message.textContent="Welcome!";
	outerdiv_elem.style.backgroundColor=orig_state;

	if(!level)
	{
			var row=document.querySelector("#row2");
			var list=document.querySelectorAll("#row2 td");

			for(var i=0; i<list.length; i++)
			{
				list[i].classList.add("colors");
				list[i].addEventListener("click", color_click);
				//list[i].style.visibility="visible";
			}

	}

	level=true;

	var list=document.querySelectorAll(".colors");
	var random_srno=Math.floor((Math.random()*6));


	for(var i=0; i<6; i++)
	{
		var r=Math.floor((Math.random()*256));
		var g=Math.floor((Math.random()*256));
		var b=Math.floor((Math.random()*256));

		if(i==random_srno)
		{
			targetCID=list[i].id;
			data.textContent="RGB("+r+", "+g+", "+b+")";
		}


		list[i].style.backgroundColor="rgb("+r+", "+g+", "+b+")";
	}
}

function color_click()
{
	var this_id=this.id;
	if(this_id==targetCID)
	{
		
		center_message.textContent="Correct!";
		new_col_button.textContent="Play Again?";
		outerdiv_elem.style.backgroundColor=this.style.backgroundColor;


		var list=document.querySelectorAll(".colors");
		for(var i=0; i<list.length; i++)
		{
			list[i].style.backgroundColor=this.style.backgroundColor;
			//list[i].style.visibility="visible";
			list[i].removeEventListener("click", color_click);
		}

		conclusion=true;
	}
	else
	{
		this.style.backgroundColor=orig_back;
		center_message.textContent="Incorrect!";			
	}
}

var data_elem=document.getElementById("data");

var outerdiv_elem=document.getElementById("outerdiv");
var orig_state=getComputedStyle(outerdiv_elem).backgroundColor;

var orig_back=getComputedStyle(document.querySelector("body")).backgroundColor;

var center_message=document.getElementById("center");

var targetCID=undefined;

var new_col_button=document.querySelector("#left span");

var easy_button=document.querySelector("#easy");
var hard_button=document.querySelector("#hard");


var level=true;
var conclusion=true;
init_hard();

new_col_button.addEventListener("mouseover", change_on_hover);
new_col_button.addEventListener("mouseout", restore_back_after_hover);
easy_button.addEventListener("mouseover", change_on_hover);
easy_button.addEventListener("mouseout", restore_back_after_hover);
hard_button.addEventListener("mouseover", change_on_hover);

init_color_blocks();

easy_button.addEventListener("click", function()
	{	
		this.removeEventListener("mouseout", restore_back_after_hover);
		hard_button.addEventListener("mouseout", restore_back_after_hover);
		hard_button.classList.remove("cc");
		init_easy();
	}	
		);

hard_button.addEventListener("click", function()
	{	
		this.removeEventListener("mouseout", restore_back_after_hover);
		easy_button.addEventListener("mouseout", restore_back_after_hover);
		easy_button.classList.remove("cc");
		init_hard();
	}	
		);

new_col_button.addEventListener("click", function()
	{
		if(level)
		{
			init_hard();
		}
		else
		{
			init_easy();
		}

	});


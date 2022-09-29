
var flag1 = true;
var flag2 = true;
var seconds = 0;
var minutes = 0;
var hours = 0;
var txt_s = "";
var txt_m = "";
var txt_h = "";
var run = "";
var sa_ti = "";

//Check that the start button was clicked and is it still active. If is then block next click, untill stop or reset button will be clicked. 
function check()
{
	if (flag2 == true)
	{
		flag2 = false;
		start();
	}
}	

//Function for stoper mechanism 
function start()
{	
	//convert seconds
	if (seconds <= 9)
	{
		txt_s = "0" + seconds;
	}
	else if (seconds > 59)
	{
		minutes++;
		seconds = 0;
		txt_m = minutes;
		txt_s = "0" + seconds;
	}
	else
	{
		txt_s = seconds;
	}

	//convert minutes
	if (minutes <= 9)
	{
		txt_m = "0" + minutes;
	}
	else if(minutes > 59)
	{
		hours++;
		minutes = 0;
		txt_h = hours;
		txt_m = minutes;
	}
	else
	{
		txt_m = minutes;
	}
	
	//convert hours
	if (hours <= 9)
	{
		txt_h = "0" + hours;
	}
	else
	{
		txt_h = hours;
	}
	
	run = txt_h + ":" + txt_m + ":" + txt_s;
	
	document.getElementById("stoper").innerHTML = run;
	
	seconds++;
	
	
	if(flag1 == true)
	{	
		setTimeout("start()", 1000);
	}
	
	flag1 = true;
}


//Function for "Stop" button
function stop()
{
	flag1 = false;
	flag2 = true;
}


//Function for "Reset" button
function again()
{
	flag1 = false;
	flag2 = true;
	seconds = 0;
	minutes = 0;
	hours = 0;
	document.getElementById("stoper").innerHTML = "00:00:00";
	s_t.remove();
	sa_ti = "";
	var save = '<div id="s_t"></div>';
	document.getElementById("place").innerHTML = save;
}

//Function for "Save time" button
function save_time()
{	
	sa_ti = sa_ti + '<div class="t">' + run + '</div>'; 
	
	document.getElementById("s_t").innerHTML = sa_ti;
}
function promptbox(){
 	var loc = window.prompt("Please Enter City Name:");
 	if(loc=="")
    {
     	loc="Jodhpur";
    }
 	myapi(loc);
}

window.onload = function(){
	loc="Jodhpur";
	myapi(loc);
}


function myapi(loc){        
        console.log(loc);
        //var apkey="3054e14dee01dc11741d8820d2ed3d0d";
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + loc + '&APPID=3054e14dee01dc11741d8820d2ed3d0d')
        .then(alldata=>{return alldata.json();})
        .then(_reqdata=>{
            var {temp, humidity} =_reqdata.main;
            const {name} = _reqdata;
            const {speed} = _reqdata.wind;
            const {main} = _reqdata.weather[0];
            var iconcode = _reqdata.weather[0].icon;

            temp=Math.floor(temp-273);
            console.log(temp);   
            console.log(humidity); 
            console.log(name);
            document.querySelector(".location-timezone").innerHTML =name;  
            document.querySelector(".temperature-degree").innerHTML =temp;
            document.querySelector(".wind").innerHTML = speed;
            document.querySelector(".humidity").innerHTML =humidity;
            document.querySelector(".description").innerHTML =main;
            document.querySelector(".ic").src="icon/"+iconcode+".png";
       });
}

window.addEventListener('load',()=>{
   var but= document.getElementById("text-inside-button");
   but.addEventListener('click',promptbox);
    console.log("hey there");
})



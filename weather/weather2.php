<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="body.css" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css2?family=Passion+One&display=swap" rel="stylesheet">
    <title>Momentum V3</title>
</head>
<body id="selector">


<div id="showtime"></div>
<div id="timecomment"></div>
<div id="myoutput"></div>
<div id="bgout"></div>


<script>
// https://api.apixu.com/v1/current.json?key=bad2c6e72d27a3ed813f4293073d0e6d&q=Toronto
// change values  
var myjson = new XMLHttpRequest();
var newx;
var x ="Caledon";
var startTime, endTime;
var picdesc, piccity, piccountry;
var username="dag";
var wcounter=900; /* 3590 */

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}  
  
function newweather()
  {
    var variable = document.getElementById('newxselect').value;
     x = variable;
    console.log("newweather is: "+x);
     // addtwo = document.querySelector("#newtext");
     // addtwo.innerHTML = "Current Weather in " + x;
     displayweather();
  }


  /*
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    */
  
function displayweather() {
     //x = document.getElementById("newxselect").value;   
     q="https://api.weatherapi.com/v1/current.json?key=205a25a4eac24a0d994195310211811&q=Toronto";
    console.log("x is: "+x);
    console.log("query is: "+q);
    // get it!
    myjson.open("GET", ""+q);
    myjson.addEventListener("readystatechange", prepareoutput);
    myjson.send();

}

function prepareoutput() {
    var output;
    var temp;
    var wimg;

console.log("Attempting to output weather data...");
    // var myoutput = document.querySelector("#weather");
    if (myjson.readyState == 4) {
        // got data back from server
        // data always returned in "repsonseText"
        output = JSON.parse(myjson.responseText);
        // clean up for testing 
        str = JSON.stringify(output, null, 4); // (Optional) beautiful indented output.
        console.log("Output is: "+str);
        // Game.status[0][0].
        // output.weather[0].icon;
        temp = output.current.temp_c;
        console.log("The weather is:"+temp);
        wimg="https:" + output.current.condition.icon;
        weatherout = x + " is " + output.current.condition.text + " and " + temp + "&#176;C" + "<img id='weatherimg' src='"+ wimg +"'>";
        document.getElementById('myoutput').innerHTML = weatherout;
        // http://openweathermap.org/img/wn/10d@2x.png
        // grab the icon id
        // wimg = output.weather[0].icon;
        // document.getElementById('myoutput').innerHTML += "<br>" + "&nbsp;<img style='transform: scale(2);' src='http://openweathermap.org/img/wn/" + wimg + ".png'>";
        // var weatherpic = document.createElement("img");
        // set attribute
        //weatherpic.setAttribute("src", output.weather_descriptions.0);
        // used to add a dynamically created object to the DOM???
        // weatherdesc=output.weather_description.0;
        // myoutput.appendChild(weatherdesc);

    }
}

function getRandomBackground()
  {
     console.log("** GETTING BACKGROUND IMAGE!");
    //
    // source code: https://gist.github.com/0asa/3b7ffdd04e35b161e038cc2a71be4b7f > really just W3 example
    //
    var app_id = 'fba66b053360b9beaf303f316ad8fa7d7dc5fa90d114ff42b89a9adca3538be2'
    var url = 'https://api.unsplash.com/photos/random?client_id=' + app_id;
    $.ajax({
    url: url,
    dataType: 'json',
    success: function(json) {
    var src = json.urls.regular;
    piccountry = json.user.location;
    picid= json.id;
    picpath= "https://unsplash.com/photos/" + picid;
    console.log("The background image city is:"+piccity);
    console.log("The country is "+piccountry);
    console.log("The id is "+picid);
    // set photo location
    if (piccountry == null)
    {
      piccountry = "Not specified. :(";
    }
    picline="Photo location is " + piccity + "," + piccountry; 
    picline += " - <a alt='The image id is:"+picid+"' title='"+src+"' target='blank' href='"+picpath+"'>"+picid+"</a>";
    document.getElementById('bgout').innerHTML = picline;
    $('#selector').css('background-image','url('+src+')').css('background-size','cover');
      }
    });
  }


/*
************************************************
create date object
************************************************
*/
function maketime()
{
  // console.log("*makingtime");
  var h,m,s,c,suffix;
  var timeis= new Date();
  h=addZero(timeis.getHours());
  console.log("Hours are "+h);
  // set comment before we clean it up
  if (h < 4 || h > 17)
    {
      c="Good evening, "+ username;
    }
  else if (h >=5 && h<=12)
  {
    c="Good morning, "+ username;
  }
  else
    {
      c="Good afternoon, "+ username;
    }
if (h >=12)
{
suffix=" p.m.";
}
else
{
    suffix=" a.m.";
}


// fix 24 and 0
    if (h>12)
    {
      h=h-12;
    }
    // fix zero
    if (h==0)
    {
      h=12;
    }


    timecommentlink = document.querySelector("#timecomment");
  timecommentlink.innerHTML =c;

    m=addZero(timeis.getMinutes());
  // s=addZero(timeis.getSeconds());
  timeis = h + ":" + m + suffix;
  console.log("Making time..."+timeis);
  document.getElementById('showtime').innerHTML = timeis;
  
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;

}
</script>
<!-- game setup file -->
  <script src="jquery360.js"></script>
<script>
/* INIT */    
displayweather();
getRandomBackground();
maketime();

/*
60000 = 1m 
Update TIME every minute
*/
setInterval(function()
{ 
maketime();
}, 60000);



/* update weather every 20m */
setInterval(function()
{ 
displayweather();
getRandomBackground(); 
}, 60000*20);

</script>
</body>
</html>
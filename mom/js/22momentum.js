/* seconds to next background 60s*30m */
bgdelay = 1800;
bgcount = 0;
/* for weather */
var myjson = new XMLHttpRequest();


/*
************************************************
get Random background from unsplash
https://moonbooks.org/Articles/How-to-get-json-data-from-a-url-using-vanilla-javascript-only-/
************************************************
*/

function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }
  
  function json(response) {
    return response.json()
  }
  

   /* https://pixabay.com/api/?key=27129908-70fb00b2f26d06289f8089993&orientation=hortizontal   data.hits[0].largeImageURL*/
/*  */


function newbg()
{
   let url = 'https://api.unsplash.com/photos/random?client_id=fba66b053360b9beaf303f316ad8fa7d7dc5fa90d114ff42b89a9adca3538be2';
   fetch(url)
    .then(status)
    .then(json)
    .then(function(data) 
      {
      console.log('Request succeeded with JSON response', data);
      document.getElementById('bg').style.backgroundImage = "url(" + data.urls.regular + ")";
      document.getElementById('bg').style.backgroundSize = "cover";
      document.getElementById('bg').style.backgroundPosition = "left top";
      document.getElementById('bg').style.backgroundRepeat = "no-repeat";
      document.getElementById('bg').style.backgroundAttachment = "fixed";
        document.getElementById('bg').style.opacity = "0.5";
        document.getElementById('picloc').innerHTML = "dagmentum V2.003";
        const bgdate = Date.now();
       // console.log("* New background was set at: " + bgdate + " Image: " + data.id + " next background in "+bgclock+" seconds.");     
    document.getElementById('picloc').innerHTML += "<br><a target='_blank' title='" + data.urls.regular + "' href='" + data.urls.regular + "'>unsplash image link</a>";
        //document.getElementById("picloc").innerHTML += "<br>Background changing in: " + bgtimer;
      })
    .catch(function(error) {
      console.log('Request failed', error);
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
  var h,m,c;
  var timeis= new Date();
    var month = timeis.getUTCMonth(); 
    let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthName = monthsArray[month];
    var day = timeis.getUTCDate();
    h = addZero(timeis.getHours());
    if (h > 12) {
        h = h - 12;
        c = "PM";
    }
    else {
        c = "AM";
    }
    // fix zero
    if (h==0)
    {
        h = 12;
    }
  m=addZero(timeis.getMinutes());
  s=addZero(timeis.getSeconds());
    timeis = monthName + " " + day + " @ " + h + ":" + m + " " + c;
    // console.log("timeis:"+timeis);
  document.getElementById("itstime").innerHTML=timeis;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/* 30 minutes from now */
function countdown()
{
bgcount++;
  var remaining = bgdelay - bgcount;   
  document.getElementById("bgtimer").innerHTML = "Seconds to new bg: " + remaining;
  /* new background */
  document.getElementById("bgtimer").innerHTML += " <a href='#' onclick='newbg();'>Get a new background</a>";
}

/* clock - update every second */
setInterval(function(){
  maketime();
  countdown();
  /* time for a new bg and update the weather */
  if (bgcount>=bgdelay)
  {
      bgcount=0;
    newbg();
    console.log("New background.");
    displayweather();
    console.log("Weather Updated.");
  }
}, 1000);

function displayweather() {
  //x = document.getElementById("newxselect").value;   
  q="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=bad2c6e72d27a3ed813f4293073d0e6d&q=Toronto";
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
     temp = output.weather[0].description;
     console.log("The weather is:"+temp);

     // http://openweathermap.org/img/wn/10d@2x.png
     // grab the icon id
     wimg = output.weather[0].icon;
     // var weatherpic = document.createElement("img");
     // set attribute
     //weatherpic.setAttribute("src", output.weather_descriptions.0);
     // used to add a dynamically created object to the DOM???
     // weatherdesc=output.weather_description.0;
     // myoutput.appendChild(weatherdesc);
   document.getElementById('theweather').innerHTML = "Toronto has <strong>" + temp + "</strong> and is <strong>" + Math.round(output.main.temp) + "&#176;C&nbsp;&nbsp;</strong>" + "&nbsp;<img style='transform: scale(1);' src='http://openweathermap.org/img/wn/" + wimg + ".png'>";
    }
}


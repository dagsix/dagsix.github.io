
/*
Nav bar class changer
*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navClass() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/*
Clear local storage - basically just gets you a new bg at this time
*/
function clearCookies()
{
    console.log("Clearing all cookies");
    localStorage.clear();
}


/*
Dave rollover action
*/
function daving()
{
  console.log("Rolled over Dave");
}

function invaded() {
  console.log("invaded: " + rotateCount);
  /*
  while (rotateCount < 359) {
    document.getElementById('invader').style.transform = "rotate(" + rotateCount + "deg)";
    rotateCount++;
  }
  */
  document.getElementById('invader').style.filter = "hue-rotate(0deg)";
  document.getElementById('invader').style.transform = "rotate(0deg)";
 }

function invading()
{
  min = Math.ceil(1);
  max = Math.floor(255);
  var x = Math.floor(Math.random() * (max - min) + min);
  console.log("invading: "+rotateCount);
  document.getElementById('invader').style.filter = "invert(48%) sepia(79%) saturate(2476%) hue-rotate(" + x + "deg) brightness(118%) contrast(119%)";
  // let temp = 45 * rotateCount;
  document.getElementById('invader').style.transform = "rotate(" + rotateCount +"deg)";
  // element.style.transform = 'rotate(90deg)';
  rotateCount=rotateCount+5;
  if (rotateCount > 360) {
    rotateCount = 1;
  }
}

 
/*
Resets the Dave logo back to Purple
*/
function resetLogo()
{
    document.getElementById('logo').style.color = "#6600ff";
    document.getElementById('logotwo').style.color = "#6600ff";
    document.getElementById('logothree').style.color = "#6600ff";
    console.log("logo colour reset");
}

/*
Populates showme with my e-mail address onRollover
*/
function showEmail()
{
    var name = "dguzda";
    var domain = "gmail.com";
    document.getElementById('showme').innerHTML = name + "@" + domain;
    console.log("Showing e-mail address");
}

/*
Clears the e-mail once the field is left
*/
function clearEmail()
{
    document.getElementById('showme').innerHTML = "Rollover to reveal. <i class='far fa-hand-pointer'></i>";
    console.log("Removing e-mail address");
}

/*
Huh - you need a third party API to get an IP address in JS...
I guess i've taken it for granted in PHP...
*/
function grabIP() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://ip-api.com/json/";
    document.getElementsByTagName("query")[0].appendChild(script);
}
/*
display it in the footer
*/
function ShowIP(response) {
    /* field to output */
    console.log("You IP address is" + response.query);
    document.getElementById('locationOut').innerHTML = response.query;
} 


function APIquery(url,keyfield,mykey,queryfield,queryname) 
{
    var myurl = url;
    var key = mykey;
    var qf = queryfield;
    var keyf = keyfield;
    var qname = queryname;
    var qnametemp;
    //
    // some APIs don't require a specific field to be specified
    // build the query based on provided infos
    //
    query = myurl + "?";
    //
    // do we need a key?
    //
    if (key=="")
    {
        // do nothing
    }
    else
    {
        query += keyf + "=" + key;
    }
    // is there a query field?
    if (qf=="")
    {
        jsonfield="nothing";
    }
    else
    {
        jsonfield = qname;
        query += "&" + qf + "=" + jsonfield;
    }
    query = query.trim();
    console.log("Trying API connection with following query: "+query);
    myjson.open("GET", ""+query);
    myjson.addEventListener("readystatechange", JSONoutput);
    myjson.send();
}

function meterup()
{
    document.getElementById('mymeter').value += 10;
}

function meterdown()
{
    document.getElementById('mymeter').value -= 10;
}

function JSONoutput() 
{
    var output;
    console.log("Attempting to output API data... Query is "+jsonfield);
    if (myjson.readyState == 4) 
    {
        // got data back from server
        // data always returned in "repsonseText"
        output = JSON.parse(myjson.responseText);
        // clean up for testing 
        str = JSON.stringify(output, null, 4); // (Optional) beautiful indented output.
        console.log("Output is: "+str);
        console.log("JSONfield is: " + jsonfield);
        // verify we are looking for ip address - if so - set that field
        if (jsonfield == "query")
        {
            ip = output['' + jsonfield];
            console.log("Looking for IP address via API.. it is: " + ip);
        }
        if (jsonfield!="nothing")
        {
            mydata = output[''+jsonfield];
            console.log("Your requested data is: "+mydata);
        }
        else
        {
            console.log("Specific query was not specified!");
        }
       // await APIquery();
    }
}


  
/* Weather API grab - outputs to id=myoutput */
  
  
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
   // document.getElementById('myoutput').innerHTML = "Toronto has <strong>" + temp + "</strong> and a temperature of <strong>" + Math.round(output.main.temp) + "&#176;C&nbsp;&nbsp;</strong>" + "&nbsp;<img style='transform: scale(1);' src='http://openweathermap.org/img/wn/" + wimg + ".png'>";
        document.getElementById('myoutput').innerHTML = "Toronto has <strong>" + temp + "</strong> and a temperature of <strong>" + Math.round(output.main.temp) + "&#176;C&nbsp;&nbsp;</strong>";
    }
}

function getRandomColor() {
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
/* opacity of 0.4 is very ligh */
return `rgba(${r}, ${g}, ${b}, 0.6)`;
}

function setRandomGradientBackground() {
const color1 = getRandomColor();
const color2 = getRandomColor();
const angle = Math.floor(Math.random() * 360);
document.documentElement.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}


// Function to generate a random gradient
function getRandomGradient() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor3 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor4 = colors[Math.floor(Math.random() * colors.length)];
  const angle = Math.floor(Math.random() * 360);
  //return `linear-gradient(${angle}deg, ${randomColor1}, ${randomColor2})`;
  return `linear-gradient(90deg, ${randomColor1}, ${randomColor2}, ${randomColor3}, ${randomColor4})`;
  }
  
  function newFade()
  {
  // Apply the gradient and animation
  console.log("** newFade()");
  document.getElementById("topani").style.background = getRandomGradient();
  document.getElementById("topani").style.backgroundSize = '200% 200%'; 
  document.getElementById("topani").style.webkitBackgroundClip = 'text';
  document.getElementById("topani").style.color = 'transparent';
  document.getElementById("topani").style.animation = 'animatedtext 3s ease-in-out infinite';
  }

// date and time
function getDateTime() {
  var now     = new Date(); 
  var year    = now.getFullYear();
  var month   = now.getMonth()+1; 
  var day     = now.getDate();
  var hour    = now.getHours();
  var minute  = now.getMinutes();
  var second  = now.getSeconds(); 
  if(month.toString().length == 1) {
       month = '0'+month;
  }
  if(day.toString().length == 1) {
       day = '0'+day;
  }   
  if(hour.toString().length == 1) {
       hour = '0'+hour;
  }
  if(minute.toString().length == 1) {
       minute = '0'+minute;
  }
  if(second.toString().length == 1) {
       second = '0'+second;
  }   
  var dateTime = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;   
  return dateTime;
   //currentTime = getDateTime();
   //document.getElementById("myversion").innerHTML = currentTime;
}

// add date to footer
function footerUpdate()
{
  document.getElementById("dagFooter").innerHTML = "Design and Coding by DAG " + getDateTime();
}



// init gradient
document.addEventListener('DOMContentLoaded', function() {
  newFade();
  footerUpdate();
}, false);

// new gradient every 5s for header text
setInterval(newFade, 5000);

// Call the function to set the random gradient background
setRandomGradientBackground();





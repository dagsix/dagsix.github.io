/*
variable init 
*/
var myclass = "onebg";
// because it needs to bee visible in various fields
var myjson = new XMLHttpRequest();
// what field in JSON are we looking for? - can't seem to pass it to the JSONoutput so global it is. 
var jsonfield = "nothing";
var ip;
/* bg variables */
var a,b,c,x,y,z,bb;
var max=99;
var i = 1;
var rotateCount = 1;
var myjson = new XMLHttpRequest();

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
the scroll to top sticky thingy 
*/

function upOver()
{
let bgChange = document.getElementById('toplink');
bgChange.style.backgroundColor = "#6600ff";
bgChange.style.borderColor = "#ffffff";
bgChange.style.cursor = "pointer";
bgChange.style.color = "#ffffff";
}

function upOut()
{
let bgChange = document.getElementById('toplink');
bgChange.style.backgroundColor = "white";
bgChange.style.borderColor = "black";
bgChange.style.color = "#6600ff";
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



/* the next four functions from https://stackoverflow.com/questions/3080421/javascript-color-gradient */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

function map(value, fromSource, toSource, fromTarget, toTarget) {
    return (value - fromSource) / (toSource - fromSource) * (toTarget - fromTarget) + fromTarget;
  }
  
  function getColour(startColour, endColour, min, max, value) {
    var startRGB = hexToRgb(startColour);
    var endRGB = hexToRgb(endColour);
    var percentFade = map(value, min, max, 0, 1);
  
    var diffRed = endRGB.r - startRGB.r;
    var diffGreen = endRGB.g - startRGB.g;
    var diffBlue = endRGB.b - startRGB.b;
  
    diffRed = (diffRed * percentFade) + startRGB.r;
    diffGreen = (diffGreen * percentFade) + startRGB.g;
    diffBlue = (diffBlue * percentFade) + startRGB.b;
  
    var result = "rgb(" + Math.round(diffRed) + ", " + Math.round(diffGreen) + ", " + Math.round(diffBlue) + ")";
    return result;
  }

  /*
  random hex colour
  */

function rndColour() {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            const random = Math.random();
            const bit = (random * 16) | 0;
            color += (bit).toString(16);
        };
        return color;
}

  function changeBackgroundColour() {
    var count = 0;
      window.setInterval(function ()
      {
        x = rndColour();
        document.getElementById('logo').style.color = x;
      }, 4000);
      // console.log("setting dave to" + x);
      // two
      window.setInterval(function() {
        x = rndColour();
        w = rndColour();
        y = rndColour();
        z = rndColour();
        // console.log("Colours for guzda" + w);
        var myid = document.getElementById("logotwo");
        myid.style["background"] = 'linear-gradient(-45deg,' + w + ',' + x + ',' + y + ',' + z + ')';
        myid.style["-webkit-background-clip"] = "text";
        myid.style["-webkit-text-fill-color"] = "transparent";
        myid.style["-webkit-text-stroke-width"] = "1px";
        myid.style["-webkit-text-stroke-color"] = "black";
        myid.style["background-size"] = "300%";
        myid.style["animation"] = "logotwoup 5s ease-in-out infinite";
        myid.style["-moz-animation"] = "logotwoup 5s ease-in-out infinite";
        myid.style["-webkit-animation"] = "logotwoup 5s ease-in-out infinite";
     }, 10000);
      // three
      window.setInterval(function() {
        x = rndColour();
          document.getElementById('logothree').style.color = x;
          // console.log("setting portfolio to" + x);
      }, 3000);
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


/*
um for testing output. :D
*/
function test()
{
    console.log("TESTING");
}

/*
fix height of this id
*/
function fixHeight(myid)
{
    console.log("id is:"+myid);
    boxHeight = document.getElementById(myid).scrollHeight;
    /* add pixels at the end so it actually works */
    boxHeight += "px";
    document.getElementById(myid).style.height=boxHeight;
    console.log("new is: "+boxHeight);
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


/* 
JS cookie handlers from 
https://www.w3schools.com/js/js_cookies.asp
*/

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
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

/* fire it off - it is in the footer */
displayweather();
  
/* clear email on contact */  
clearEmail();

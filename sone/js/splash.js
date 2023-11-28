//
// created a seperate .js page - for some reason this code cause the other to not function? 
// is there something with them being on different pages?
//
var nextprod, prevprod, myslider, slidercount = 1;

// slider tags for splash screen
prevprod = document.querySelector("#prev");
nextprod = document.querySelector("#next");
myslider = document.querySelector("#slider");

prevprod.addEventListener("click", prevslider);
nextprod.addEventListener("click", nextslider);


//
// functions for the splashpage slider
//
function nextslider() {
    var path;
    slidercount++;
    // fix counter
    if (slidercount > 5) {
        slidercount = 1 // wrap around
    }
    // counter should be right - set new image
    path = "img/prod" + slidercount + ".jpg";
    //alert("In next slider. path is : " + path);
    myslider.src = path;
}

//
// functions for the splashpage slider
//
function prevslider() {
    var path;

    slidercount--;
    // fix counter
    if (slidercount <= 0) {
        slidercount = 5 // wrap around
    }
    // counter should be right - set new image
    path = "img/prod" + slidercount + ".jpg";
    //alert("In prev slider. path is : " + path);
    myslider.src = path;
}

//
// automagically advance the slider every 2 seconds
//
setInterval(nextslider, 2000);

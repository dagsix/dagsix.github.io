/*
##########################################################
Coding by Dave Guzda
Coding Assignment WDDM 113/114
Static Store coded in JavaScript
>>> make swanky code! <<<
###########################################################
*/


var total = 0.00,
    pcount = 0,
    tcost,
    dpcount = 0,
    addone, onecount, minusone,
    addtwo, twocount, minustwo,
    addthree, threecount, minusthree,
    addfour, fourcount, minusfour,
    addfive, fivecount, minusfive,
    keep, itemlist,
    checkplz, fcount = 0,
    clearthecart,
    otherc, taxrate = .15,
    totaltext, totaldiv, topofpage;

// arrays by product id starting with 1
var pdiv = [];
// counter for each product amount purchased
var buy = [0, 0, 0, 0, 0, 0];
// product costs
var cost = [0.00, 250.00, 250.00, 25.50, 20.75, 10.50];
// product descriptions for checkout loop
var desc = ["", "Sabres Home Jersey (Blue)", "Sabres Away Jersey (White)", "Sabres Touque", "Sabres Baseball Style Hat", "Sabres Victory Stien"];





//
// set up link between JS and HTML
// remember the damn #### hashtag! #####
//

// clear the cart
clearthecart = document.querySelector("#clearcart");
// for checkout
itemlist = document.querySelector("#itemlist");
// add one of product one
addone = document.querySelector("#addone");
// remove one of product one
minusone = document.querySelector("#minusone");
// number of product ones purchased
onecount = document.querySelector("#onecount");

// add one of product two
addtwo = document.querySelector("#addtwo");
// remove one of product two
minustwo = document.querySelector("#minustwo");
// number of product two purchased
twocount = document.querySelector("#twocount");

// add one of product three
addthree = document.querySelector("#addthree");
// remove one of product three
minusthree = document.querySelector("#minusthree");
// number of product three purchased
threecount = document.querySelector("#threecount");

// add one of product four
addfour = document.querySelector("#addfour");
// remove one of product four
minusfour = document.querySelector("#minusfour");
// number of product four purchased
fourcount = document.querySelector("#fourcount");
// add one of product five
addfive = document.querySelector("#addfive");
// remove one of product five
minusfive = document.querySelector("#minusfive");
// number of product five purchased
fivecount = document.querySelector("#fivecount");
// total div
totaldiv = document.querySelector("#thetotal");
// total div text
totaltext = document.querySelector("#thetotaltext");
// keep shpping
keep = document.querySelector("#keepshopping");
// running total cost
tcost = document.querySelector("#tcost");
// number of items purchased
dpcount = document.querySelector("#dpcount");
// user is checking out
checkplz = document.querySelector("#checkout");
// products class (the div)
// example: boxes=document.querySelectorAll(".containers");
pdiv = document.querySelectorAll(".product");
// for scrolling to the top of the page
topofpage = document.querySelector("#topofthepage");
// other charge when calculating total
otherc = document.querySelector("#othercharges");
// *************************************
//
// listen for events
//
// *************************************
// whoa, not so fast, return to shopping
keep.addEventListener("click", buymore);
// the add and subtract of the five products
addone.addEventListener("click", function () {
    buyone(1);
}, false);
minusone.addEventListener("click", function () {
    removeone(1);
}, false);
addtwo.addEventListener("click", function () {
    buyone(2);
}, false);
minustwo.addEventListener("click", function () {
    removeone(2);
}, false);
addthree.addEventListener("click", function () {
    buyone(3);
}, false);
minusthree.addEventListener("click", function () {
    removeone(3);
}, false);
addfour.addEventListener("click", function () {
    buyone(4);
}, false);
minusfour.addEventListener("click", function () {
    removeone(4);
}, false);
addfive.addEventListener("click", function () {
    buyone(5);
}, false);
minusfive.addEventListener("click", function () {
    removeone(5);
}, false);
// checkout
checkplz.addEventListener("click", checkout);
// clear cart
clearthecart.addEventListener("click", clear);
//
// Counter for ALL products
//
function buyone(fcount) {
    //alert("addone" + fcount + " Count for that product is " + buy[fcount]);
    buy[fcount]++; /* how many of each are bought */
    pcount++;
    total = parseFloat(total) + cost[fcount];
    total = total.toFixed(2); /* otherwise JS kills the second decimal place */
    updatecounts();
}
// 
// Clear the cart
//
function clear() {
    var i;
    total = 0.00;
    pcount = 0;

    for (i = 0; i <= buy.length - 1; i++) {
        buy[i] = 0;
    }
    // cleared the data, refresh the page
    location.reload();
}
//
// Remove product - ALL products
// 
function removeone(fcount) {
    //alert("removeone" + fcount + " Count for that product is " + buy[fcount]);
    if (buy[fcount] - 1 >= 0) {
        buy[fcount]--;
        total = parseFloat(total) - cost[fcount];
        total = total.toFixed(2); /* otherwise JS kills the second decimal place */
        pcount--;
    }
    //
    // Can't have negative product count
    //
    if (buy[fcount] < 0) {
        alert("You can't remove any more products!");
        buy[fcount] = 0;
    }
    // fix math
    // can't owe on the sale -grin-
    if (total < 0.00) {
        total = 0.00;
    }
    // update product count
    if (pcount < 0) {
        pcount = 0;
    }
    updatecounts();
}
//
// updates all the product counters - must be a better way to do this?
//
function checkout() {
    // did they buy anything?
    // set total to 0 for 'fresh' calculation otherwise odd things happen
    var i, temp = 0.00,
        total = 0.00,
        mytax = 0.00;
    if (pcount == 0) {
        alert("I thought you were here to shop? Your cart is empty.");
    } else {
        // hide the products / show the final tally in main 

        // alert("check plz" + pdiv.length);
        for (i = 0; i <= pdiv.length - 1; i++) {
            // boxes[i].style.backgroundColor="red";
            pdiv[i].style.visibility = "hidden";
        }
        //
        // display final total
        //
        //totaldiv.style.display = "show";
        topofpage.scrollIntoView();
        totaldiv.style.height = "auto";
        totaldiv.style.visibility = "visible";
        checkplz.style.visibility = "hidden";
        // scroll to top
        itemlist.innerText = "\n\nItems purchased: " + pcount + "\n";
        for (i = 1; i <= buy.length; i++) {
            if (buy[i] > 0) {
                // km.toFixed(2)); 
                temp = buy[i] * cost[i];
                // recalculate total
                total = parseFloat(total) + parseFloat(temp);
                itemlist.innerText = itemlist.innerText + "\n" + desc[i] + " - " + buy[i] + " x $" + cost[i] + " = Total: $" + temp.toFixed(2);
            }
        }
        //alert("total is: " + total);
        // var tax=0.00,taxrate=.15, cost=450.00;
        // tax= taxrate * cost;
        // other charges like tax
        // taxrate = +(taxrate * 100).toFixed(2);
        mytax = taxrate * total;
        // tax = tax.toFixed(2);
        //alert("tax: " + mytax);
        itemlist.innerText = itemlist.innerText + "\nGST & PST Tax at 15% $" + mytax.toFixed(2);
        // total = parseFloat(myInt1) + parseFloat(myInt2) + parseFloat(myInt3);
        total = parseFloat(total) + parseFloat(mytax);
        otherc.innerText = "\n\n ** FREE SHIPPING THIS MONTH! **";
        // total = total.toFixed(2);
        totaltext.innerText = "\n\nTOTAL COST : $" + total.toFixed(2) + "\n";
    }
}

//
// the shopper chooses to continue shopping
//
function buymore() {
    var i;
    // alert("bringthebeatback!");
    totaltext.innerText = "";
    itemlist.innerText = "";
    // hide/show to avoid undesirable results
    topofpage.scrollIntoView();
    checkplz.style.visibility = "visible";
    totaldiv.style.visibility = "hidden";
    totaldiv.style.height = "0px";
    for (i = 0; i <= pdiv.length - 1; i++) {
        // boxes[i].style.backgroundColor="red";
        pdiv[i].style.visibility = "visible";
    }
}
//
// update the product display counts
//
function updatecounts() {
    tcost.innerHTML = total;
    dpcount.innerHTML = pcount;
    onecount.innerHTML = buy[1];
    twocount.innerHTML = buy[2];
    threecount.innerHTML = buy[3];
    fourcount.innerHTML = buy[4];
    fivecount.innerHTML = buy[5];
}

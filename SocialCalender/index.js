setTimeout(function(){alert("These are your requests for today");}, 500);
var selections = [];

var check = function() {

if (selections.length < 3) {
  window.alert("choose more!");
}

else {window.alert("enough choices!")} ;

};

var choice1 = function() {
selections.push("Gallery");
window.alert("Gallery is a good choice");
    setTimeout(function(){alert(selections);}, 1000);
check();
};

 var choice2 = function() {
selections.push("Lunch");
window.alert("Lunch is a good choice");
    setTimeout(function(){alert(selections);}, 1000);
check();

};

var choice3 = function() {
selections.push("Golf");
window.alert("Golf is a good choice");
    setTimeout(function(){alert(selections);}, 1000);
check();

};

var choice4 = function() {
selections.push("Dinner");
window.alert("Dinner is a good choice");
    setTimeout(function(){alert(selections);}, 1000);
check();

};

var choice5 = function() {
selections.push("Cinema");
window.alert("Cinema is a good choice");
    setTimeout(function(){alert(selections);}, 1000);
check();

};

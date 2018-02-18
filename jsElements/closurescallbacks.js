//callback using nested setTimeouts

function speakSoon() {

 var greeting = 'finally, hello';

 setTimeout(function() {

   console.log(greeting);

   setTimeout(function() {

     console.log(greeting + " again");

 }, 2000);


}, 4000);

 }

speakSoon();


//custom callback function

function hasCompleted(value) {
  var a = 600;
  var b = 700;
  var c = 900;

  value();

}

hasCompleted(function() {

console.log("all done!");

});

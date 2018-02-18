
var setvalues = function() {

a = document.getElementById('agilityscore').value;
b = document.getElementById('powerscore').value;
c = document.getElementById('intelligencescore').value;
d = document.getElementById('originalityscore').value;

function weightscore(a,b,c,d) {

return a*0.7 + b*0.4 + c*0.9 + d*0.3;

};

var result = weightscore(a,b,c,d);

document.getElementById('result').value = Math.round(result*100)/100;

};

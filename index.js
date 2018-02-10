function ConnectedThing(name, capacity, location, status) {
      this.thingName = name;
      this.totalCapacity = capacity;
      this.thingLocation = location;
      this.thingStatus = status;
}


var newBin  = function() {
Bin = new ConnectedThing(document.getElementById('binName').value, document.getElementById('binCapacity').value, document.getElementById('binLocation').value, document.getElementById('binStatus').value);
};

var newFridge = function() {
Fridge = new ConnectedThing("Fridge",60,"south", "empty");
};

var newCar = function() {
Car = new ConnectedThing("Car", 200, "east", "new");
};

var newWaterPipe = function() {
WaterPipe = new ConnectedThing("Water Pipe", 500, "west", "full");
};

var newBinProperty = function () {

Bin.smell = "bad";
Bin.type = "recycling";
Bin.danger = "high";

};

var binProfile = function() {

Bin.facets = (function() {
  return Bin.thingName + " " + Bin.totalCapacity + " " + Bin.thingLocation + " " + Bin.thingStatus + " " + Bin.smell + " " + Bin.type + " " + Bin.danger;

})();
window.alert(Bin.facets);
};

var output = function() {

window.alert("The bin is called " + Bin.thingName  + " and smells " + Bin.smell + " and is for " + Bin.type);
window.alert("The fridge is " + Fridge.thingStatus);
window.alert("The car has " + Car.totalCapacity + " kg of space");
window.alert("The water pipe is located in the " + WaterPipe.thingLocation);

};

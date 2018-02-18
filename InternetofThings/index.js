function ConnectedThing(name, capacity, location, status) {
      this.thingName = name;
      this.totalCapacity = capacity;
      this.thingLocation = location;
      this.thingStatus = status;
}


var newVehicle  = function() {
Vehicle = new ConnectedThing(document.getElementById('vehicleName').value, document.getElementById('vehicleCapacity').value, document.getElementById('vehicleLocation').value, document.getElementById('vehicleStatus').value);
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

var newVehicleProperty = function () {

Vehicle.colour = "black";
Vehicle.type = "electric";
Vehicle.range = "high";

};

var vehicleProfile = function() {

Vehicle.facets = (function() {
  return Vehicle.thingName + " " + Vehicle.totalCapacity + " " + Vehicle.thingLocation + " " + Vehicle.thingStatus + " " + Vehicle.colour + " " + Vehicle.type + " " + Vehicle.range;

})();
window.alert(Vehicle.facets);
};

var output = function() {

window.alert("The vehicle is called " + Vehicle.thingName  + " and is " + Vehicle.colour + " and is an " + Vehicle.type + " vehicle");
window.alert("The fridge is " + Fridge.thingStatus);
window.alert("The car can carry " + Car.totalCapacity + " kg of luggage");
window.alert("The water pipe is located in the " + WaterPipe.thingLocation);

};

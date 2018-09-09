{

    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        elevators.forEach(function (elevator) {



            elevator.on("passing_floor", function(floorNum, direction) {
if (direction == "down" && floors[floorNum].arZemyn) {  elevator.goToFloor(floorNum, true);    } //paimam pakeleivius
if (direction == "up" && floors[floorNum].arAukstyn) {  elevator.goToFloor(floorNum, true);    } //paimam pakeleivius

}); // passing floor pabaiga
elevator.on("floor_button_pressed", function(floor) {
    elevator.goToFloor(floor);
});


        }); //elevatoriu funkcijos

  floors.forEach(function (floor) {
    floor.on("up_button_pressed", function() {
                  floor.arAukstyn = true; // suzinm, ar yra iskvietimas aukstyn
                  });

                  floor.on("down_button_pressed", function() {
                                floor.arZemyn = true; // suzinm, ar yra iskvietimas zemyn
                                });





          });
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}

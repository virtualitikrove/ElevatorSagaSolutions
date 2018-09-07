{

    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        elevators.forEach(function (elevator) {

            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.goToFloor(floorNum);

            });
elevator.on("idle", function() {

 if(elevator.goingUpIndicator() || elevator.goingDownIndicator(), function(floorNum) {
                elevator.goToFloor(floorNum);
            });

});
        });
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}

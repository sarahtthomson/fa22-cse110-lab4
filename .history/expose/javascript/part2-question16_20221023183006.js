let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const key in statistics) {
    if(key[0] == 'r') {
        console.log(key[0]);
    }
    else if((statistics.key % 2) == 1) {
        console.log(key[0]);
    }
}
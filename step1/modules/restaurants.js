const brain = require("brainjs")
const fs = require("fs");

const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input: { Monday, Tuesday, Wednesday, etc. }
// output: { Restaurant1, Restaurant2 }

const trainingData = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: { [dayOfWeek]: 1 },
        output: { [restaurantName]: 1 }
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({ 'Monday': 1 }));
//fs.writeFileSync('trained-net.js', `export default ${ net.toFunction().toString() };`);
function restaurantForDay(dayOfWeek) {
    const result = net.run({ [dayOfWeek]: 1 });
    let highestValue = 0;
    let highestRestaurantName = '';
    for (let restuarantName in result) {
        if (result[restuarantName] > highestValue) {
            highestValue = result[restuarantName];
            highestRestaurantName = restuarantName;
        }
    }
    
    return highestRestaurantName;
}

module.exports = restaurantForDay('Tuesday');
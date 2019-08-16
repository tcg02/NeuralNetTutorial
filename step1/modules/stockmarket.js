const brain = require("brainjs")

const result = "It will work one day!!!"
// function scaleDown(step){ //normalize
//     return {
//         open: step.open / 138,
//         high: step.high / 138,
//         low: step.low / 138,
//         close: step.close / 138
//     }
// }

// function scaleUp(step){ //denormalize
//     return {
//         open: step.open * 138,
//         high: step.high * 138,
//         low: step.low * 138,
//         close: step.close * 138
//     }
// }
 
 
// //best way to normalize
// //open = (open - lowest_open) / (highest_open - lowest_open)

// const scaledData = rawData.map(scaleDown)

// const trainingData=[
//     scaledData.slice(0,5),
//     scaledData.slice(5,10),
//     scaledData.slice(10,15),
//     scaledData.slice(15,20),
// ];
 

// const net = new brain.recurrent.LSTMTimeStep({
//     inputSize: 4,
//     hiddenLayers: [8, 8],
//     outputSize: 4
// });

// net.train(trainingData,{
//     learningRate: 0.005,
//     errorThresh: 0.02,
//     //log: (stats) => console.log(stats)
// });

// //console.log(scaleUp(net.run(trainingData[1])))

// const result = net.forecast([
//                             trainingData[0][0],
//                             trainingData[0][1]
//                             ], 4).map(scaleUp)

module.exports = result 
// bonus material
// https://en.wikipedia.org/wiki/Activation_function
/*
https://github.com/BrainJS/brain.js/blob/9595fe1d0069939ba271b25c1e7db785edd11936/src/neural-network.js#L227
https://github.com/BrainJS/brain.js/blob/9595fe1d0069939ba271b25c1e7db785edd11936/src/neural-network.js#L527
*/
const net = new brain.NeuralNetwork({hiddenLayers:[4,2]})

const trainingData =[ 
    {input:[0,0], output:[0]},
    {input:[0,1], output:[1]},
    {input:[1,0], output:[1]},
    {input:[1,1], output:[0]}
]

net.train(trainingData,{
log: (error)=>console.log(error)
})

console.log(net.run([1,1]))
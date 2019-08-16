
const brain = require("brainjs")
 
const net = new brain.NeuralNetwork({hiddenLayers:[3]})

const trainingData =[ 
    {input:[0,0], output:[0]},
    {input:[0,1], output:[1]},
    {input:[1,0], output:[1]},
    {input:[1,1], output:[0]}
]

net.train(trainingData,{       
    logPeriod: 100
})   

const result = net.run([1,0])   

module.exports = result 
 
const brain = require("brainjs")

const trainingData = [
    [1,2,3,4,5],
    [5,4,3,2,1]
]

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData, {log: (status)=>console.log(status) })

module.exports = net.run([3,4])
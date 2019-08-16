
const axios = require("axios")

const  rawdata = () => {
    const url = 'https://tcg02.us/server/api/nepsedata.php/?scope=Y'
    axios.get(url)
    .then(async (response) => { 
        const formatedData = response.data.map(d=>parseFloat(d['index_value']))
        const fY = await Promise.all(formatedData).then((fD)=>{
            return listToMatrix(formatedData, 5);
        });
        
        //console.log(rd);
        return fY;
        
    }).catch(error =>{
        /* eslint-disable no-console */    
        console.log(error);
        return false
      })   
}

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}
 

// const brain = require("brainjs")

// function scaleDown(step){ //normalize
//     return {
//         data: step.open / 1000      
//     }
// }

// function scaleUp(step){ //denormalize
//     return {
//         data: step.open * 1000   
//     }
// }

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

// console.log(net.forecast([
//     trainingData[0][0],
//     trainingData[0][1]
// ], 4).map(scaleUp))

 
Promise.all(rawdata).then((d)=>{
    module.exports = d
})

 

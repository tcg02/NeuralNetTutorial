
//https://www.youtube.com/watch?v=6E6XecoTRVo
const express = require('express')

const step1 = require("./modules/step1")
const restaurants = require("./modules/restaurants")
//const count = require("./modules/count")


const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
 

app.get('/step1/', async (req,res)=>{    
    try{  
        res.send(step1)       
        
    }catch(e){
        res.status(500).send(e)
    } 
})

app.get('/restaurants/', async (req,res)=>{    
    try{  
        res.send(restaurants)       
        
    }catch(e){
        res.status(500).send(e)
    } 
})

// app.get('/count/', async (req,res)=>{    
//     try{  
//         res.send(count)       
        
//     }catch(e){
//         res.status(500).send(e)
//     } 
// })



app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})

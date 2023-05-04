const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;
const chefs = require('./data/data.json');


app.use(cors());

app.get('/',(req,res)=>{
    res.send('data server is running')
})



app.get('/chefs',(req,res)=>{
    res.send(chefs);
})

app.get('/chefs/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    // console.log(chefs.chefs);   
    const selectedChef = chefs.chefs.find(chef => parseInt(chef.id) === id );
    res.send(selectedChef);
    
})

app.listen(port,()=>{
    console.log(`the port is ${port}`);
})
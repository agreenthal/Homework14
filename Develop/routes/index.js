const express = require('express');
const goku = express.Router();
const path = require('path');
const db = require('./../models')

goku.get('/', (req,res)=>{
res.sendFile(path.join(__dirname, 'index.html'))
})

goku.get('/exercise', function( req, res){
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

goku.get('/stats', function( req, res){
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

goku.post('/api/workouts', function(req, res){
    console.log(req.body);
    db.create({})
    .then(data=>res.json(data))
        .catch(err=>console.log(err))
})

goku.get('/api/workouts', (req, res) => {
    db.find().then(data => res.json(data))
    .catch(err => console.log(err))
})

goku.put('/api/workouts/:id', (req,res)=>{
    db.findByIdAndUpdate(req.params.id, {$push:{exercises: req.body}})
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

goku.get('/api/workouts/range', (req, res) => {
    db.find().then(data => res.json(data))
    .catch(err => console.log(err))
})

module.exports = goku;
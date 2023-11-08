const express = require("express");
const preference = require("../models/preference.model.js")
const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);
    try{
    const newPreference = await preference.create(req.body);
    newPreference.save().then(() => console.log("Preference added"));
    res.status(200);
    }catch(e){
        console.log(e);
    }
    
});

module.exports= router;
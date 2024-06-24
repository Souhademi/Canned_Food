const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Canned } = require('../models/canned');


router.get('/', (req, res) => {
    Canned.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retrieving Notes :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:id', async(req, res) => {
    try {
        const canned = await Canned.findById(req.params.id);
        if (!canned) {
            return res.status(404).json({ message: "Canned food not found" });
        }
        res.json(canned);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});
router.post('/', (req, res) => {
    var pr = new Canned({
        typeElement: req.body.typeElement,
        flavor: req.body.flavor,
        weight: req.body.weight,
        nutritionalValue: req.body.nutritionalValue,
        foodAdditives: req.body.foodAdditives,
        protein: req.body.protein,
        sugar: req.body.sugar,
        fats: req.body.fats,

    });
    pr.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Preserve Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var pr = {
        typeElement: req.body.typeElement,
        flavor: req.body.flavor,
        weight: req.body.weight,
        nutritionalValue: req.body.nutritionalValue,
        foodAdditives: req.body.foodAdditives,
        protein: req.body.protein,
        sugar: req.body.sugar,
        fats: req.body.fats,
    };
    Canned.findByIdAndUpdate(req.params.id, { $set: pr }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Preserve Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Canned.findByIdAndRemove(req.params.id, (err, doc) => { //removing documents from collection
        collections
        if (!err) { res.send(doc); } else { console.log('Error in Preserve Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;
//Dependencies
const bands = require('express').Router();
const { Op } = require('sequelize');
const db = require('../models');
const { Band } = db;

//ROUTES
//Find all bands (INDEX)
bands.get('/', async (req, res)=> {
    try {
        const foundBands = await Band.findAll({
            order:[['available_start_time','ASC']],
            where: {
                band_name:{ [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        });
        res.status(200).json(foundBands);
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Find by ID
bands.get('/:id', async (req, res)=> {
    try {
        const foundBand = await Band.findOne(
            {
                where:{ band_id: req.params.id}
            }
        );
        res.status(200).json(foundBand);
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Create a band
bands.post('/', async (req, res)=> {
    try {
        const newBand = await Band.create(req.body);
        res.status(200).json({
            message:'Successfully inserted a new band',
            data: newBand
        });
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Update a band
bands.put('/:id', async (req, res)=> {
    try {
        const updatedBand = await Band.update(req.body,{
            where: {
                band_id: req.params.id
            }
        });
        res.status(200).json({
            message:`Successfully updated ${updatedBand} band`,
            data: updatedBand
        });
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Delete a band
bands.delete('/:id', async (req, res)=> {
    try {
        const deletedBand = await Band.destroy({
            where: {
                band_id: req.params.id
            }
        });
        res.status(200).json({
            message:`Successfully deleted ${deletedBand} band`,
            data: deletedBand
        });
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Export
module.exports = bands;
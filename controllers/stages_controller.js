//Dependencies
const stages = require('express').Router();
const { Op } = require('sequelize');
const db = require('../models');
const { Stage } = db;

//ROUTES
//Find all stages (INDEX)
stages.get('/', async (req, res)=> {
    try {
        const foundStages = await Stage.findAll({
            order:[['stage_id','ASC']],
            where: {
                stage_name:{ [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        });
        res.status(200).json(foundStages);
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Find by ID
stages.get('/:id', async (req, res)=> {
    try {
        const foundStage = await Stage.findOne(
            {
                where:{ stage_id: req.params.id}
            }
        );
        res.status(200).json(foundStage);
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Create an stage
stages.post('/', async (req, res)=> {
    try {
        const newStage = await Stage.create(req.body);
        res.status(200).json({
            message:'Successfully inserted a new stage.',
            data: newStage
        });
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Update a stage
stages.put('/:id', async (req, res)=> {
    try {
        const updatedStage = await Stage.update(req.body,{
            where: {
                stage_id: req.params.id
            }
        });
        res.status(200).json({
            message:`Successfully updated ${updatedStage} stage.`,
            data: updatedStage
        });
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Delete an stage
stages.delete('/:id', async (req, res)=> {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        });
        res.status(200).json({
            message:`Successfully deleted ${deletedStage} stage`,
            data: deletedStage
        });
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Export
module.exports = stages;
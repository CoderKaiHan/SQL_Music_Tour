//Dependencies
const events = require('express').Router();
const { Op } = require('sequelize');
const db = require('../models');
const { Event, Stage_event, Meet_greet, Set_time, Band, Stage } = db;

//ROUTES
//Find all events (INDEX)
events.get('/', async (req, res)=> {
    try {
        const foundEvents = await Event.findAll({
            order:[['event_date','ASC']],
            where: {
                event_name:{ [Op.like]: `%${req.query.name ? req.query.name : ''}%` }                
            }
        });
        res.status(200).json(foundEvents);
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Find by ID
events.get('/id/:id', async (req, res)=> {
    try {
        const foundEvent = await Event.findOne(
            {
                where:{ event_id: req.params.id}
            }
        );
        res.status(200).json(foundEvent);
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Find by name
events.get('/name/:name', async (req, res)=> {
    try {
        const foundEvent = await Event.findOne(
            {
                where:{ event_name: req.params.name},
                include: [
                    {
                      model: Meet_greet, 
                      as: 'meet_greets',
                      include: 
                        {
                          model: Band,
                          as: 'bands',
                          where: {
                            band_name: {[Op.like]: `%${req.query.band ? req.query.band : ''}%`}
                          } 
                        },
                        attributes: { exclude: ['event_id'] },
                        order: [
                            'start_time','ASC'
                        ]
                    },
                    {
                        model: Stage,
                        as: 'stages',
                        where: {
                          stage_name: {[Op.like]: `%${req.query.stage ? req.query.stage : ''}%`}
                        },
                        through: {
                            attributes: []
                        }
                    },
                    {
                      model: Set_time,
                      as: 'set_times',
                      include:[ 
                        {
                          model: Band,
                          as: 'bands',
                          where: {
                            band_name: {[Op.like]: `%${req.query.band ? req.query.band : ''}%`}
                          }
                        }],
                      attributes: { exclude: ['event_id'] },
                      order: [
                        'start_time','ASC'
                      ]
                    }
            
                ]
            }
        );
        res.status(200).json(foundEvent);
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Create an event
events.post('/', async (req, res)=> {
    try {
        const newEvent = await Event.create(req.body);
        res.status(200).json({
            message:'Successfully inserted a new event.',
            data: newEvent
        });
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Update a event
events.put('/:id', async (req, res)=> {
    try {
        const updatedEvent = await Event.update(req.body,{
            where: {
                event_id: req.params.id
            }
        });
        res.status(200).json({
            message:`Successfully updated ${updatedEvent} event.`,
            data: updatedEvent
        });
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Delete an event
events.delete('/:id', async (req, res)=> {
    try {
        const deletedEvent = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        });
        res.status(200).json({
            message:`Successfully deleted ${deletedEvent} event`,
            data: deletedEvent
        });
    } catch (e) {
        res.status(500).json(e.message)
    }
});

//Export
module.exports = events;
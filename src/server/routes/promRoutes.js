//import router 
///import controller
import express from 'express';
const promRouter = express.Router();
import promController from '../controllers/promController.js';



//routes
promRouter.get('/metrics', promController.getDefaultMetrics, (req, res) => {
    res.status(200).json(res.locals.getDefaultMetrics);
})

export default promRouter;

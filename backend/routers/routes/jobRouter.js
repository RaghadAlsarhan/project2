const express = require('express');
const jobRouter = express.Router();
const { getAllJob, getJob, addNewJob, updateJob, deleteJob, findJob } = require('../controllers/job');
const { job } = require('../jobDB');

jobRouter.get('/', getAllJob);
jobRouter.get('/:id', getJob);
jobRouter.post('/add', addNewJob);
jobRouter.put('/update/:id', updateJob);
jobRouter.delete('/delete/:id', deleteJob);
jobRouter.get('/filter/:location', findJob)

module.exports = {jobRouter}


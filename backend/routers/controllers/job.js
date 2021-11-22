const {jobs} = require('../db')

const getAllJob = (req, res)=>{
    res.send(jobs)
}

const getJob = (req, res)=>{
    const foundJob = jobs.filter(elem => {
        
    });
}
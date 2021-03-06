const job = require('../jobDB')
const { jobRouter } = require('../routes/jobRouter')

const getAllJob = (req, res)=> {
    res.send(job)
}

const getJob = (req, res)=> {
    const jobID = req.params.id
    const foundJob = job.find((elem)=>{
        return elem.id == jobID
    })
    if(foundJob){
        res.send(foundJob);
    }else{
        res.send("Error job not found")
    }
}

const findJob = (req, res)=> {
    const jobLocation = req.params.location
    const foundJob = job.filter((elem)=>{
       return elem.location === jobLocation
    })
    if(foundJob){
        res.send(foundJob)
    }else{
        res.send("Error")
    }
}


const addNewJob = (req, res)=>{
    const addedJob = {
        id: req.body.id,
        title: req.body.title,
        location: req.body.location,
        type: req.body.type,
        description: req.body.description
    };
    job.push(addedJob)
    res.status(201).send(addedJob);
    res.status(400).send("error");

};

const updateJob = (req, res)=>{
    const jobID = req.params.id
    const foundJob = job.find((elem)=> elem.id == jobID)
    if(!foundJob){
        res.send("Job not found !!")
    }else{
        foundJob.id = req.body.id;
        foundJob.title = req.body.title;
        foundJob.location = req.body.location;
        foundJob.type = req.body.type;
        foundJob.description = req.body.description;
    }
}

const deleteJob = (req, res)=>{
    const jobID = req.params.id
    const foundJob = job.find((elem)=> elem.id == jobID)
    if(!foundJob){
        res.send("Job not found!");
    }else{
        const index = job.indexOf(foundJob);
        job.splice(index, 1)
        res.send(job)
    }
}


module.exports = {getAllJob, getJob, addNewJob, updateJob, deleteJob, findJob}

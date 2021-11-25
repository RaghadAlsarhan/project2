const {job} = require('../jobDB')
const { jobRouter } = require('../routes/jobRouter')

const getAllJob = (req, res)=> {
    res.send(job)
}

const getJob = (req, res)=> {
    const jobID = req.params.id
    const foundJob = job.find((elem)=>{
        return elem.id == jobID
        //console.log(jobID);
        //console.log(req.params.id);
    })
    console.log(foundJob);
    if(foundJob){
        res.send(foundJob);
    }else{
        res.send("Error job not found")
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
    console.log(addedJob);
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


module.exports = {getAllJob, getJob, addNewJob, updateJob, deleteJob}


// const getJob = (req, res)=> {
//     const foundJob = job.find((elem)=>{
//        return elem.id == req.params.id
//         //console.log(elem.id);
//         //console.log(req.params.id);
//     })
//     console.log(foundJob);
//     if(foundJob){
//         res.send(foundJob);
//     }else{
//         res.send("Error job not found")
//     }
// }
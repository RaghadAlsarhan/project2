const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routers/routes/userRouter');
const { jobRouter } = require('./routers/routes/jobRouter');

const app = express();


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//routers
app.use('/user', userRouter);
app.use('/job', jobRouter);



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});

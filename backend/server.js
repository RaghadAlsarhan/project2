const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routers/routes/userRouter');

const app = express();

//routers
app.use('/user', userRouter);


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});

import express from 'express';
import connectDB from './database/db.js';
import userRouter from './routes/userRoutes.js';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use('/api/user', userRouter)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is listening at port:${PORT}`);
});



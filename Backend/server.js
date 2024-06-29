import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import authRoutes from './routes/auth.js'
import budgetRoutes from './routes/budget.js'

import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 4000  ; 

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://rahulmali1603:Rahulmali_22@cluster0.zhpndau.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
 
app.use('/auth', authRoutes);
app.use('/budget', budgetRoutes);
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
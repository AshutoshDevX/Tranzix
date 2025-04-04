import express from 'express';
import rootRouter from './Routes/index.js'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT

app.use(cors())
app.use(express.json());


app.use("/api/v1/", rootRouter);



app.listen(PORT, () => {
    console.log("Server successfully running on 3000");
})

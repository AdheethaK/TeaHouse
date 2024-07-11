import express, { Response,Request } from "express";
import { request } from "http";

const app = express();
const port = 8000;

app.get("/",(req:Request,res:Response) => {
    res.send("APPLICATION is running :0")
})

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
})
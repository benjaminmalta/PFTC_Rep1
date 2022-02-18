import Express from "express";
import cors from "cors";
import { v4 as uuid } from 'uuid';

const app = Express();
const PORT = 3001;
let requests = 0;
const secretToken = uuid();
console.log(secretToken);

//3b2b54ae-1108-4689-9e5f-99ac5f6679e0


app.get("/secret",(req,res)=>{
    const token = req.query.token;
    requests ++;
    if(token === secretToken){
        res.send({result: "200", requests: requests , message:"This is a very secret message!"});
    }else{
        res.send({result: "401", message:"Invalid Token!"});
    }
    });

app.use(cors());

app.listen(PORT, () =>
    console.log("Server Listening on port: " + PORT))
    
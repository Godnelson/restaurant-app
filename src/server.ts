import * as express from "express";
import { routes } from "./controller";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1", routes)

app.listen(8080, ()=>{console.log("server up")})

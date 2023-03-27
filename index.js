import express from "exprees";
import cors from "cors";
import productRouter from "./routes/ProductRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(productRouter);

app.listen(5000,()=> console.log("server running on port 5000"));
import express from 'express';
import morgan from 'morgan';
import paymentRouter from "./routes/payment.routes.js";
import path from "path"

const app = express();

app.use(morgan('dev'));
app.use(paymentRouter);
app.use(express.static(path.resolve('src/public')))

app.listen(3000);
console.log( "Server on port", 3000);
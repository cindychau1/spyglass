import express from 'express';
const app = express();
const PORT = 1234;

import  promRouter  from './routes/promRoutes.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/prom-data', promRouter);

app.use((req, res, next) => {
  res.status(404).send("404: not found")
})

//global err handler
// app.use((err, req, res) => {
//     const defaultErr = {
//       log: "Express error handler caught unknown middleware error",
//       status: 500,
//       message: { err: "An error occurred" },
//     };
//     const errorObj = {...defaultErr, ...err };
//     console.log(errorObj.log);
//     return res.status(errorObj.status).json(errorObj.message);
//   });

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

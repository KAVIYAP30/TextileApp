import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import uploadRouter from './routers/upload.router.js';
import { dbconnect } from './config/database.config.js';
import path, { dirname } from 'path';
dbconnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);

//static files
// Define the absolute directory path to the client build directory
const clientBuildPath = new URL("./client/build", import.meta.url).pathname;

// Serve static files from the client build directory
app.use(express.static(clientBuildPath));

// Route handler for all other requests, serving index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(clientBuildPath, "index.html"));
})

const publicFolder = path.join(__dirname, 'public');
app.use(express.static(publicFolder));

app.get('*', (req, res) => {
  const indexFilePath = path.join(publicFolder, 'index.html');
  res.sendFile(indexFilePath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
  console.log('JWT_SECRET:', process.env.JWT_SECRET);
});

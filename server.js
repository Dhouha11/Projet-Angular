const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors')
const PostRouter = require('./backend/routes/post.route');
const app = express();
app.use('/post', PostRouter);
app.use(express.json());
app.use(cors());
// connection vers mongoDB Atlas (service cloud)
mongoose
  .connect(
    "mongodb+srv://Dhouha:<0000>@cluster0.oeuyevs.mongodb.net/PostsDB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });

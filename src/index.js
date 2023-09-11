const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

 //connect to your database
mongoose.connect(DB.db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to the database.")
}).catch (err=>{
    console.log("Not connected to the database.", err);
    process.exit();
}) ;

app.use(express.json());
//make them available
app.use('/books', bookRoutes);

// app listens to your port number and connect to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const mongoose = require('mongoose');
require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const phonebooksRouter = require('./routes/phonebooks');


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL)



app.use(express.json());
app.use(express.static("build"));
app.use(cors());
app.use('/phonebook', phonebooksRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const mongoose = require("mongoose");

const phonebookSchema = new mongoose.Schema({
    name : String,
    number:String,
});

phonebookSchema.set("toJSON",{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
      },
});

module.exports = mongoose.model("Phonebook", phonebookSchema);
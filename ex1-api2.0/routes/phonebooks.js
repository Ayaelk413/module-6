const router = require("express").Router();
const Phonebook = require("../models/phonebook");


router.get("/", (req, res, next) => {
    Phonebook.find({})
      .then((persons) => res.json(persons))
      .catch((err) => next(err));
  });

  router.get("/:id", (req, res, next) => {
    console.log("getOne");
    Phonebook.findById(req.params.id)
      .then((person) => {
        if (person) {
          res.json(person);
        } else {
          throw new NotFoundError();
        }
      })
      .catch((err) => next(err));
  });

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Phonebook.findByIdAndDelete(id);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal server error when deleting a person" });
  }
});

  router.post("/", async (req, res) => {
    const body = req.body;
    const errorMessages = [];
    if (!body.name) errorMessages.push("name must be present");
    if (!body.number) errorMessages.push("number must be present");
    if (errorMessages.length > 0) {
      res.status(422).json({ errorMessages });
      return;
    }
  
    const newPerson = new Phonebook({
      name: body.name,
      number: body.number,
    });
  
    newPerson.save().then((savedPerson) => {
      const generatedId = savedPerson._id; // l'id généré par mongodb
      res.json(savedPerson);
    });
  });

  module.exports = router;
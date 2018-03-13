const Router = require("express").Router;
const router = new Router();
const Words = require("./model");


router.get("/word", (req, res) => {
  const word = Words.findAll()
    .then(word => {
      res.json(word);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});


router.get("/word/:id", (req, res) => {
  const word = Words.findById(req.params.id)
    .then(word => {
      if(word){
        res.json(word);
      } else {
        res.json({message: "wordID not found"})
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});


module.exports = router;

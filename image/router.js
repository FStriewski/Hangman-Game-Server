const Router = require("express").Router;
const router = new Router();
const Images = require("./model");


router.get("/image", (req, res) => {
  const image = Images.findAll()
    .then(image => {
      res.json(image);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});


router.get("/image/:id", (req, res) => {
  const image = Images.findById(req.params.id)
    .then(image => {
      if(image){
        res.json(image);
      } else {
        res.json({message: "imageID not found"})
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});


module.exports = router;

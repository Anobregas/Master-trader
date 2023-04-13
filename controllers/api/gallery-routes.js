const router = require("express").Router();
const {Gallery} = require("../../models")

router.get('/', async (req, res) => {
    // find all categories
    try {
      const gallerydata = await Gallery.findAll();
      res.status(200).json(gallerydata);
    } catch (err) {
      res.status(500).json.apply(err);
    }
    // be sure to include its associated Products
  });

  module.exports = router;
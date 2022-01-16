const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include:[{
      model: Product
    }]
  }).then((tagData) => {
    res.json(tagData)
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id, {
    include: [{
      model: Product
    }]
  }).then((tagDataId) => {
    res.json(tagDataId)
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTag) => {
    res.json(newTag)
  }).catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  }, {
    where: {
      id: req.params.id
    }
  }).then((updateTag) => {
    res.json(updateTag)
  }).catch((err) => {
    console.log(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((deleteTag) => {
    res.json(deleteTag)
  }).catch((err) => {
    console.log(err)
  })
});

module.exports = router;

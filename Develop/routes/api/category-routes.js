const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{
      model: Product
    }],
  }).then((CategoryData) => {
    res.json(CategoryData)
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [{
      model: Product
    }]
  }).then((categoryDataId) => {
    res.json(categoryDataId)
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory)
  }).catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  }, {
    where: {
      id: req.params.id
    }
  }).then((updateCategory) => {
    res.json(updateCategory);
  }).catch((err) => {
    console.log(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((deleteCategory) => {
    res.json(deleteCategory)
  }).catch((err) => {
    console.log(err)
  })
});

module.exports = router;

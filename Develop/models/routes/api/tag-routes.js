const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id, { include: [{ model: Product }]
    });
    if (!tags) {
      res.status(404).json({ message: 'No tag found' });
      return;
  }
  res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    const newTag = await.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const tags = await Tags.update(req.body, {
      where: { id: req.params.idv } });
      res.status(200).json({ message: 'Tag updated' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

router.delete('/:id', (req, res) => {
  try {
    const tags = await Tags.delete({
      where: { id: req.params.id } });
      if (!deleted) {
        res.status(404).json({ message: 'No tag found' });
      }
      res.status(200).json(deleted);
    } catch (err) {
      res.status(500).json(err)
    }
});

module.exports = router;

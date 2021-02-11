const router = require('express').Router();
const handle = require('../handlers');
router
  .route('/')
  .get(handle.showallMeme)
  .post(handle.createMeme);



router
  .route('/:id')
  .get(handle.showMeme)
  .patch(handle.editMeme)

module.exports = router;

const express = require('express');
const {
  updateOrDeleteMetadata,
  deleteUserfromDb,
} = require('../controllers/userController');
const router = express.Router();
const { jwtCheck } = require('../middleware/jwtMiddleware');

router.patch('/metadata', jwtCheck, updateOrDeleteMetadata);
router.delete('/:userId', jwtCheck, deleteUserfromDb);

module.exports = router;

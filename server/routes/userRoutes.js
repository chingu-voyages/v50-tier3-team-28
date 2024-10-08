const express = require('express');
const {
  updateOrDeleteMetadata,
  deleteUserfromDb,
  getUserRequestCounts,
} = require('../controllers/userController');
const router = express.Router();
const { jwtCheck } = require('../middleware/jwtMiddleware');

router.patch('/metadata', jwtCheck, updateOrDeleteMetadata);
router.delete('/:userId', jwtCheck, deleteUserfromDb);
router.get('/request-counts', jwtCheck, getUserRequestCounts);

module.exports = router;

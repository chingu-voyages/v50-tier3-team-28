const express = require('express');
const router = express.Router();
const {
  createRequest,
  updateRequest,
  deleteRequest,
  listAllRequests,
  acceptRequest,
  completeRequest,
  cancelAcceptedRequest,
} = require('../controllers/requestController');
const { jwtCheck } = require('../middleware/jwtMiddleware');

router.post('/', jwtCheck, createRequest);
router.put('/:id', jwtCheck, updateRequest);
router.delete('/:id', jwtCheck, deleteRequest);
router.post('/:id/accept', jwtCheck, acceptRequest);
router.patch('/:id/cancel', jwtCheck, cancelAcceptedRequest);
router.post('/:id/complete', jwtCheck, completeRequest);
router.get('/', jwtCheck, listAllRequests);

module.exports = router;

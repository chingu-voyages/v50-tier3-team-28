const Request = require('../models/Request');
const User = require('../models/User');
const { validateRequest } = require('../validators/requestValidator');

exports.createRequest = async (req, res) => {
  try {
    validateRequest(req.body);
    const user = await User.findOne({ userId: req.auth.sub });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const request = new Request({
      ...req.body,
      beefinderId: req.auth.sub,
    });

    await request.save();
    res.status(201).send({
      success: true,
      message: 'Request created successfully',
      request,
    });
  } catch (error) {
    console.error('Error creating request:', error);
    res
      .status(400)
      .send({ success: false, message: 'Failed to create request', error });
  }
};

exports.updateRequest = async (req, res) => {
  try {
    validateRequest(req.body);
    const userId = req.auth.sub;

    const request = await Request.findOne({
      _id: req.params.id,
      beefinderId: userId,
    }).populate('beefinder');

    if (!request) {
      return res.status(404).send({
        success: false,
        message:
          'Request not found or you do not have permission to update this request',
      });
    }

    Object.assign(request, req.body);

    await request.save();
    res.send({
      success: true,
      message: 'Request updated successfully',
      request,
    });
  } catch (error) {
    console.error('Error updating request:', error);
    res
      .status(400)
      .send({ success: false, message: 'Failed to update request', error });
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    const userId = req.auth.sub;

    const request = await Request.findOneAndDelete({
      _id: req.params.id,
      beefinderId: userId,
    }).populate('beefinder');

    if (!request) {
      return res
        .status(404)
        .send({ success: false, message: 'Request not found' });
    }
    res.send({
      success: true,
      message: 'Request deleted successfully',
      request,
    });
  } catch (error) {
    console.error('Error deleting request:', error);
    res
      .status(400)
      .send({ success: false, message: 'Failed to delete request', error });
  }
};

exports.acceptRequest = async (req, res) => {
  try {
    const userId = req.auth.sub;

    const request = await Request.findOne({
      _id: req.params.id,
      isActive: true,
    }).populate('beefinder');

    if (!request) {
      return res
        .status(404)
        .send({ success: false, message: 'Request not found' });
    }

    request.isAccepted = true;
    request.isActive = false;
    request.beekeeperId = userId;
    request.acceptedAt = new Date();

    await request.save();
    res.send({
      success: true,
      message: 'Request accepted successfully',
      request,
    });
  } catch (error) {
    console.error('Error accepting request:', error);
    res
      .status(400)
      .send({ success: false, message: 'Failed to accept request', error });
  }
};

exports.cancelAcceptedRequest = async (req, res) => {
  try {
    const userId = req.auth.sub;

    const request = await Request.findOne({
      _id: req.params.id,
      isAccepted: true,
      beekeeperId: userId,
    });

    if (!request) {
      return res
        .status(404)
        .send({ success: false, message: 'Request not found' });
    }

    request.beekeeperId = null;
    request.isAccepted = false;
    request.isActive = true;
    request.canceledAcceptedAt = new Date();

    await request.save();
    res.send({
      success: true,
      message: 'Request cancellation accepted successfully',
      request,
    });
  } catch (error) {
    console.error('Error canceling accepted request:', error);
    res.status(400).send({
      success: false,
      message: 'Failed to cancel accepted request',
      error,
    });
  }
};

exports.completeRequest = async (req, res) => {
  try {
    const userId = req.auth.sub;

    const request = await Request.findOne({
      _id: req.params.id,
      isAccepted: true,
      $or: [{ beekeeperId: userId }, { beefinderId: userId }],
    }).populate('beefinder');

    if (!request) {
      return res.status(404).send();
    }
    request.isCompleted = true;
    request.isActive = false;
    request.completedAt = new Date();

    await request.save();
    res.send(request);
  } catch (error) {
    console.error('Error completing request:', error);
    res.status(400).send({ error: 'Failed to complete request' });
  }
};

exports.listAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate('beefinder beekeeper');
    res.send({
      success: true,
      message: 'Requests retrieved successfully',
      requests,
    });
  } catch (error) {
    console.error('Error listing requests:', error);
    res
      .status(400)
      .send({ success: false, message: 'Failed to list requests', error });
  }
};

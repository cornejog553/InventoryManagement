const express = require('express');
const deleteController = require('../controllers/deleteController');

const router = express.Router();

// You can for example add a top level middleware function that handles say authentication and only let the request come in if they're authenticated
// This prevents from executing the middleware functions below if the request is not authenticated
// We will learn more about authentication in later lessons
// usually calls either next() or next(error)

// router.use(authMiddleware);

// router-level middlewares

// GET request for getting all the users
router.get('/', deleteController.displayDeletePage);

router.post('/:id', deleteController.deleteJersey);

module.exports = router;
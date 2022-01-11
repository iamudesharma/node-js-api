
const pushNotification = require('../controller/push-notification.controller');

const express = require('express');

const router = express.Router();


router.get("/SendNotification", pushNotification.SendNotification);
router.post("/SendNotificationToDevice", pushNotification.SendNotificationToDevice);



module.exports = router;





const { ONE_SIGNAL_CONFIG } = require("../config/app.config");

const pustNotification = require("../services/push-notification.services");

exports.SendNotification = (req, res, next) => {

    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contesnts: { en: "Text Message" },
        included_segments: ["All"],
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "Push Title",
        },
    };

    pustNotification.SendNotification(message, (error, results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({

            message: "Notification sent successfully",
            data: results,
        });
    });
};


exports.SendNotificationToDevice = (req, res, next) => {

    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contesnts: { en: "Text Message" },
        included_segments: ["included_player_ids"],
        content_available: true,
        included_player_ids: req.body.devices,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "Push Title",

        }
    };

    pustNotification.SendNotification(message, (error, results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({

            message: "Notification sent successfully",
            data: results,
        });
    });
};


var express = require('express');
const { getAllToken } = require('../services/deviceTokenService');
const { extractColumnFromJson } = require('../utils/Util');
const { sendNotificationToMultipleDevices } = require('../services/notificationService');
var router = express.Router();

/* GET home page. */
router.get('/test', async (req, res, next) => {
    try{
        let data = await getAllToken();
        let tokens = extractColumnFromJson(data,"token");
        let title = "Notification title";
        let body = "Notification body";
        await sendNotificationToMultipleDevices(title, body,tokens);
        res.status(200).json({
            status : 200,
            message: "Notification envoyé",
        })
    }catch(error){
        console.error(error)
        res.status(400).json({
            status : 400,
            message: "Une erreur s'est produite"
        })
    }
});

module.exports = router;

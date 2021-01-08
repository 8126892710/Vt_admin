module.exports = {
    sendResponse: (res, responseCode, responseMessage, data) => {
        return res.status(responseCode).send({responseCode, responseMessage, data})
    }
}
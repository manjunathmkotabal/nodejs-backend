import constants from "../constants.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    switch(statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });
        case constants.UNAUTHORIZED:
            res.json({
                title: "Not Authorized",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });
        default:
            console.log("No error, all good!")
            break
    }
}

export default errorHandler;
import winston from "winston";
import "express-async-errors";

function initLogging(){
    process.on('uncaughtException', (ex) => {
        winston.error(ex.message, ex);
        process.exit(1);
    });

    process.on('unhandledRejection', (ex) => {
        winston.error(ex.message, ex);
        process.exit(1);
    });
    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
}

export default initLogging;
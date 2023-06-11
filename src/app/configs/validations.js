import Joi from 'joi';
function initValidations(){
    Joi.object = require('joi-objectid')(Joi)
}

export default initValidations;
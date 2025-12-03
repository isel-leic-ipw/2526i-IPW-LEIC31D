import {ERROR_CODES}  from "./errors.mjs"


function HttpError(status, obj) {
    this.status = status
    this.body = obj
}

const ERROR_MAPPING =  {
    [ERROR_CODES.InvalidData]: 400,
    [ERROR_CODES.NotFound]: 404,
    [ERROR_CODES.NotAuthorized]: 403,
}

const INTERNAL_ERROR = new HttpError(500, { message: `Unexpected error. Contact your administrator`})



export default function(applicationError) {
    const httpErr = new HttpError(ERROR_MAPPING[applicationError.code], { message: applicationError.message})
    if(httpErr.status != undefined)
        return httpErr
    return INTERNAL_ERROR;
}
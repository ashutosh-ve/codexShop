import AppError from "./appError.js";

export const notFound = (req,res,next)=>{
    const error = (`Not Found - ${req.originalUrl}`);
    return (new AppError(error,404))
}


export const errorHanndler = (err, req, res, next)=>{
    let statusCode = res.statusCode === 200 ? 500: res.statusCode;
    let message = err.message;
    
    
    if(err.name === 'CaseError'||err.name === 'TypeError'|| err.name === 'ObjectId'){
        message= 'Resource not found';
        status=404;
    }

    res.status(statusCode)
        .json({
            message,
            stack: process.env.NODE_ENV === 'production'? '👾': err.stack
        })
}


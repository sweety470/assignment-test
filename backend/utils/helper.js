

const Helper = {
    successResponse : (res,key,message) =>{
        res.status(200).json({
            code:key,
            statue:"SUCCESS",
            message:message,
        })
    },
    successResponseWithData :(res,key,message,data)=>{
        res.status(200).json({
            code:key,
            statue:"SUCCESS",
            message:message,
            data:data
        })
    },
    ErrorResponse: async (res, key = '', msg, data = '') => {
        if (key) {
            var data = {
                status: false,
                code: key,
                message: msg,
                data: []
            };
        }
        var data = {
            status: false,
            code: key,
            message: msg,
            data: []
        };
        return await res.status(200).json(data);
    },
}

module.exports = Helper
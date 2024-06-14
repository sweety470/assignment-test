
const {user} = require('../models');
const Helper = require('../utils/helper');

exports.addUser = async(req,res) =>{
    const {email,name,mobile,interest,age} = req.body
    try {
        let userExists = await user.findOne({where:{email:email}});
        if(userExists){
            return Helper.ErrorResponse(res,'email_req','Email already exists.Try with another.')
        }
        let requestObject = {
            email,name,mobile,interest,age
        }
        let addData = await user.create(requestObject)
      
        return Helper.successResponseWithData(res,'200',"Data Added successfully",addData)
    } catch (error) {
        console.log("Error in add user________________________________________________",error)
        return await Helper.ErrorResponse(res, 'internal_server_error', error.message)
    }
},
exports.getUsers = async(req,res) =>{
    try {
        
        let allData = await user.findAll({order: [['createdAt', 'DESC']]})
      
        return Helper.successResponseWithData(res,'200',"Data feteched successfully",allData)
    } catch (error) {
        console.log("Error in add user________________________________________________",error)
        return await Helper.ErrorResponse(res, 'internal_server_error', error.message)
    }
}

exports.getUser = async(req,res) =>{
    const {id} = req.body
    try {
        
        let data = await user.findOne({where:{id:id}})

        if(!data){
            return Helper.ErrorResponse(res,'not_found','This user id does not exists.')
        }
      
        return Helper.successResponseWithData(res,'200',"Data feteched successfully",data)
    } catch (error) {
        console.log("Error in add user________________________________________________",error)
        return await Helper.ErrorResponse(res, 'internal_server_error', error.message)
    }
},

exports.updateRecord = async(req,res) =>{
    const {id,email,name,mobile,interest,age} = req.body
    try {

        if(!id){return Helper.ErrorResponse(res,'user_id_req','User_id is required')}
        
        let data = await user.findOne({where:{id:id}})

        if(!data){
            return Helper.ErrorResponse(res,'not_exists','user does not exists')
        }

        await user.update({email,name,mobile,interest,age},{where:{id:id}})

        let updatedData = await user.findOne({where:{id:id},order: [['createdAt', 'DESC']]})
      
        return Helper.successResponseWithData(res,'200',"Data updated successfully",updatedData)
    } catch (error) {
        console.log("Error in add user________________________________________________",error)
        return await Helper.ErrorResponse(res, 'internal_server_error', error.message)
    }
},
exports.deleteUser = async(req,res) =>{
    const {id} = req.body
    try {

        if(!id){return Helper.ErrorResponse(res,'user_id_req','User_id is required')}
        
        let data = await user.findOne({where:{id:id}})

        if(!data){
            return Helper.ErrorResponse(res,'not_exists','user does not exists')
        }

        await user.destroy({where:{id:id}})

      
        return Helper.successResponse(res,'200',"Data deleted successfully")
    } catch (error) {
        console.log("Error in add user________________________________________________",error)
        return await Helper.ErrorResponse(res, 'internal_server_error', error.message)
    }
}


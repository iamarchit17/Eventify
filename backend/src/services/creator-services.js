const ApiResponse = require('../utils/api-response')

async function registerCreator(creator){

}

async function updateCreatorById(creatorID, payload){

}

//requires authorisation for admin
async function getCreatorList(){ 

}

//requires authorisation for same creator
async function getCreatorById(creatorID){

}

async function deleteCreatorById(creatorID){

}

module.exports={
    registerCreator, updateCreatorById, getCreatorList, getCreatorById, deleteCreatorById
}
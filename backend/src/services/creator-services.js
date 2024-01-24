const ApiResponse = require('../utils/api-response')

async function createCreator(creator){

}

async function updateCreator(creatorID, payload){

}

//requires authorisation for admin
async function getCreatorList(){ 

}

//requires authorisation for same creator
async function getCreatorById(creatorID){

}

async function deleteCreator(creatorID){

}

module.exports={
    createCreator, updateCreator, getCreatorList, getCreatorById, deleteCreator
}
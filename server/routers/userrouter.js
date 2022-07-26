const router =require ("express").Router()
const models =require("../models/user")
router.get('/api/user',models.getOneuser)
router.post("/api/create",models.createpost)
router.patch ('/api/update/:id',models.updateuser)
router.delete ('/api/delete/:id',models.deleteuser)
module.exports={userrouter:router}
const loginModel = require("../model/login");
module.exports={
    createlogin(req,res){
        let newlogin = new loginModel({
            "user_name":req.body.user_name,
            "password":req.body.password
        });
        loginModel.create(newlogin)
        .then(res.
             status(200)
            .send("Login Created Successfully"))
        .catch(err=>res
            .status(400)
            .send(error));
    
    },
   async getlogin(req, res){
        await loginModel.findOne({_id:req.params.id }).exec()
        .then(loginModel=>res
            .status(200)
            .send(loginModel))
        .catch(err=>res
            .status(400)
            .send(error));
       
    }
}
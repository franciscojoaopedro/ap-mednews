const Author = require('../models/authorModel');

// Implemente as funções CRUD aqui

module.exports={
    async index(req, res){
        return res.json({ok:true,message:"index author"})
    },
   async execute(req,res){
    const {name,email,bio}=await req.body
    try {
        if(!name || !email || !bio){
            return res.json({Error:true,message:"Nenhum campo deve estar vazio!"})
        }
        const author= await Author.findOne({email:email})
        if(!author){
            await Author.create({name,email,bio});
            return res.json({error:false,message:"create author"})
        }
        return res.json({error:false,message:"esse email já esta sendo utilizado!"})
    } catch (error) {
        
    }
   },
   async update(req,res){

    return res.json({ok:true,message:"update author"})
   },
   async destroy(req,res){
    return res.json({ok:true,message:"destroy author"})
   },
}

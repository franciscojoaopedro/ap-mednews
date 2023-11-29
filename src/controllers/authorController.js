const Author = require('../models/authorModel');

// Implemente as funções CRUD aqui
//  criar controle para   atualizar o perfil com e adicionar o avatar e a bio!

module.exports={
   async index(req, res){
        try {
            const users=await Author.find();
            if(users==[]){
                return res.json({error:false,message:"não existe nenhum author"})
            }
            return res.json({ok:true,message:"index author",users})
        } catch (error) {
            return res.json({error:true,message:error,msm:"não é possivel mostrar os authors"})
        }
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
       try {
            const {author_id}=await req.headers
            const {name,email,bio}=await req.body
            const userfind= await Author.findById({_id:author_id})
            
            if(!userfind){
                return res.json({error:false,message:"author não encontrado!"})
            }
            await Author.findByIdAndUpdate({_id:author_id},{
                name,
                email,
                bio
            })
    
            return res.json({error:false,message:"update author"})
        } catch (error) {
            return res.json({error:true,message:"erro ao atualizar o author",messageError:error})
            
        }
   },
   async destroy(req,res){
       try {
        const {author_id}=await req.headers
        const {id}=await req.params
        console.log(id)
        const deleterUser= await Author.findById({_id:id})     
        if(!deleterUser){
            return res.json({error:false,message:"não possivel deletar o author"})
        }
        await Author.findByIdAndDelete({_id:id})
        return res.json({error:false,message:"destroy author"})
    } catch (error) {
        return res.json({error:false,messageError:error})
    }
   },
}

const Author = require('../models/authorModel');
const Post = require('../models/postModel');

// Implemente as funções CRUD (Create, Read, Update, Delete) aqui


module.exports={
    async index(req, res){
        try{
            let posts= await Post.find();
            return res.json({error:false, posts})
        }
        catch (err) {
            console.log(err);
            return res.status(500).send("Erro ao listar os Posts")
        }
    },
   async execute(req,res){
        try {
            const {title,content }=await req.body
            const {author_id}= await req.headers
            const author= await Author.findById({_id:author_id})
            if(!author){
                return res.json("Não foi possivel criar o post, porque o usuario não existe!")
                
            }else{
                const post= new Post({title, content, author:author_id});
                await post.save()
                 return res.json({error:false,message:"post created"})
            }
        } catch (error) {
            new  Error({message:"erro interno a criar o post",error})
        }
   },
   async update(req,res){},
   async destroy(req,res){},
}

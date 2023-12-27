const Author = require('../models/authorModel');
const Post = require('../models/postModel');

// Implemente as funções CRUD (Create, Read, Update, Delete) aqui


module.exports={
    async index(req, res){
        try{
            let posts= await Post.find()
                .populate("author",{name: "$name",bio:"$bio"});
            return res.json({error:false, posts})
        }
        catch (err) {
            console.log(err);
            return res.status(500).send("Erro ao listar os Posts")
        }
    },
    async indexOF(req, res){
        try{
            let posts= await Post.find()
                .populate("author",{name: "$name",bio:"$bio"});
            return res.json({error:false, posts})
        }
        catch (err) {
            console.log(err);
            return res.status(500).send("Erro ao listar os Posts")
        }
    },
    async indexUserAndAllPosts(req, res){
        const {id}=req.params
        try {
            const user=await Author.find({_id:id})
            
            const allPost= await Post.find({author:id})
            .populate("author","name email bio")
            

            if(!user){
                return res.json({error:true,message:"não existe nenhum author"})
            }
            
            return res.json({error:false,message:"todos os post",
            allPost
        })
        } catch (error) {
            return res.json({error:true,message:error,msm:"não é possivel mostrar o author"})
        }
    },

    async showOnePostEndComments(req,res){
        try {
            const {id } = await req.params;
            const post= await Post.findOne({ _id:id })
            .populate("author")
            .populate({
              path: "comments",
              populate: { path: "author"}
            });
            
            return res.json({error:false,post})
        } catch (error) {
            console.log(error)
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

   async update(req,res){
   try {
    const {id}=await req.params;
    const {author_id}= await req.headers
    const {title,content}= await req.body

    if(!id && !author_id){
        return res.json({error:true,message:"verificar a existencia dos post ou do usuario!"})
    }

    await Post.findByIdAndUpdate({_id:id},{
        title,
        content
    })
    return res.json({error:false,message:"Post atualizado!"})
   } catch (error) {
       console.log({error:true,messageError:error})
   }
   },
   
   async destroy(req,res){
        try{
            const {id}=await req.params

            const findPost=await  Post.findById({_id: id})
            if(!findPost){
                return res.json({error:true,message:"post não encontrado!"})
            }
            await  Post.findByIdAndDelete({_id:id})

            return res.json({error:false,message:"post deletado!"})

        }catch(error){
                console.log({error:true,messageError:error})
        }
   },
}

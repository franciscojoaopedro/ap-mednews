const app=require("./src/app/server")


const PORT=process.env.PORT_DEV
app.listen(PORT,()=>{
    console.log(`server is running 🌏 http://localhost:3333`)
})
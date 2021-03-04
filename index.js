const express = require("express"); //import express
const app = express();//init express



app.get("/",function(req,res){
    res.send("Welcome");
});

app.get("/git",function(req,res){
    res.send("<h1>welcome to my git: https://github.com/vitorfarias001</h1>");
})

 app.get("/linkedin",function(req,res){
     res.send("<h1>Welcome to my h1 linkedin: https://www.linkedin.com/in/devvitorfarias/</h1>");
 })
 app.get("/ola/:nome",function(req,res){
    res.send(req.params.nome);
})

app.get("/ola/:age",function(req,res){
    var age = req.params.age;
    res.send("<h1>"+ age +"</h1>")
})

app.get("/ola/:cep?",function(req,res){
    var cep = req.params.cep;
    if(cep){
        res.send("<h2>Where your live:"+ cep +"</h2>")
    }else{
        res.send("<h3>I Live in Brazil</h3>")
    }
})

app.get("chanel/youtube",function(req,res){
    var chanel = req.query["chanel"];

    if(chanel){
        res.send(chanel);
    }else{
        res.send("No channels provided");
    }
})
app.get("/nome/:age",function(req,res){
    var nome = req.params.nome;
    var age = req.params.age;
    res.send("<h1> Oi " +nome+ "do" + age + "</h1>")
})
app.listen(4000,function (error) {
    if(error){
        console.log("Error");
    }else{
        console.log("Server init")
    }
})



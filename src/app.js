import express from "express";

const app = express();

app.use(express.json())

let usuario = [];
app.get("/busca", (req, res) => {

const nomeBusca = req.query.nome;

if (nomeBusca) {
    const nomes = usuario.filter((i) => {
        return i.nome.toLowerCase().includes(nomeBusca.toLowerCase());
    });

    return res.status(200).json(nomes);
}
    res.json(usuario);
})  

app.post("/usuarios", (req, res) => {
    console.log(req.body);
    usuario.push(req.body);
    res.status(201).json({mensagem:"Cliente Cadastrado!"})
})

app.listen(3000, ()=> {
    console.log("Servidor Rodando!")
})

// http://localhost:3000
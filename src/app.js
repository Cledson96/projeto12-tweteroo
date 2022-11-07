import express from "express";
import cors from "cors";

const app = express();


app.use(cors());
app.use(express.json());


const users = [];
const tweets = [];
let avatarr = "";

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    console.log(req.body);
    avatarr = avatar;
    if (!username || !avatar) {
        res.status(400).send({ message: "Todos os campos são obrigatórios!!!" });
        return;
    }

    const usuario = {
        username,
        avatar
    };

    users.push(usuario);

    res.status(201).send("OK");
    console.log(users)
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    if (!username || !tweet) {
        res.status(400).send({ message: "Todos os campos são obrigatórios!!!" });
        return;
    }

    const envio = {
        username,
        avatarr,
        tweet
    };

    tweets.push(envio);

    res.status(201).send("OK");
   });

app.get("/tweets", (req, res) => {

    let enviar = [];
if(tweets[0]){
   enviar=tweets.slice(tweets.length - 10);
   console.log(enviar)
   
            res.send(enviar)
            return
}
console.log("erro");
res.send(enviar)

});





app.listen(5000, () => {
    console.log(`Server running in port: ${5000}`);
});
import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
dotenv.config();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Apenas /ordenaLista e interlace funcionam no momento. Acesse https://consumo-api.vercel.app para entender melhor"
    );
});

app.post("/ordenaLista", (request, response) => {
  let data = request.body.listas;
  console.log(data);
  data.salaN.sort();
  data.salaS.sort();
  response.status(200).json({ listas: data });
});

app.get("/interlace", (req, res) => {
  const { intervaloA, intervaloB } = JSON.parse(req.query.data);
  let validate = false;

  intervaloA[0] === intervaloB[0] || intervaloA[0] === intervaloB[1]
    ? (validate = true)
    : (validate = false);
  intervaloA[1] === intervaloB[0] || intervaloA[1] === intervaloB[1] || validate
    ? (validate = true)
    : (validate = false);

  res.status(200).json({ validate: validate });
});

app.listen(PORT, () => {
  console.log("server rodando na porta " + process.env.PORT);
});

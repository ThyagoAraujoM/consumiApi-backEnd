import express from "express";
import cors from "cors";
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/ordenaLista", (request, response) => {
  let data = request.body;
  data.listas.salaN.sort();
  data.listas.salaS.sort();
  response.status(200).json({ data: data });
});

app.get("/interlace", (req, res) => {
  const { intervaloA, intervaloB } = req.body;
  let validate = false;

  intervaloA[0] === intervaloB[0] || intervaloA[0] === intervaloB[1]
    ? (validate = true)
    : (validate = false);
  intervaloA[1] === intervaloB[0] || intervaloA[1] === intervaloB[1] || validate
    ? (validate = true)
    : (validate = false);

  res.status(200).json({ validate: validate });
});

app.listen(8080, () => {
  console.log("server rodando na porta 3000");
});

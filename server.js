const express = require("express");
const mercadopago = require("mercadopago");

const app = express();
app.use(express.json());

mercadopago.configure({
    access_token: "SEU_ACCESS_TOKEN_AQUI"
});

app.post("/criar-pagamento", async (req, res) => {

    const pagamento = await mercadopago.preferences.create({
        items: [
            {
                title: "Cubo AI Premium",
                quantity: 1,
                unit_price: 20
            }
        ]
    });

    res.json({
        link: pagamento.body.init_point
    });
});

app.get("/", (req, res) => {
    res.send("Cubo backend rodando 🚀");
});

app.listen(3000, () => {
    console.log("Servidor rodando...");
});

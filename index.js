const app = require('express')();
// NOTE: May turn this into a variable so it can be hosted elsewhere a bit safer...(?)
const PORT = 8000;

const ft = require('./data/text.json');

// TODO: Implement a way for users to request a specific phrase that matches with the function below
app.get('/', (req, res) => {
    res.status(200).send({

        text: randFT(),
    })
});

app.listen(
    PORT,
    () => console.log(`Listening on http://localhost:${PORT}`)
)

// Picks the flavor text at the requested index, or if left blank, a random one
function randFT(n = Math.floor(Math.random() * ft.length)) {
    return ft[n];
}

// I mainly used Claude to help me with setting this up, especially after I wiped the original version of this.
const app = require('express')();
const ft = require('./data/text.json');
const PORT = 3000;

// Main API endpoint
app.get('/api/flavor', (req, res) => {
    res.status(200).json(
        randFT()
    )
});

// Vibe check endpoint
app.get('/health', (req, res) => {
    res.json({status: 'healthy'});
});

// Basic info endpoint
app.get('/', (req, res) => {
    res.json({
        message: "nekobu\'s Flavor Text",
        endpoints: {
            'GET /api/flavor': 'Get a random flavor text',
            'GET /health': 'Health check endpoint'
        }
    });
});

// Now listen up!
app.listen(PORT,
    () => console.log(`Listening on http://localhost:${PORT}`)
)

// Picks the flavor text at the requested index, or if left blank, a random one
function randFT(n = Math.floor(Math.random() * ft.length)) {
    return ft[n];
}

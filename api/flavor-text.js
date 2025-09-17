const ft = require('./data/text.json');

export default function handler(req, res) {
    // If the request is a GET one, send back a random flavor text
    if (req.method === 'GET') {
        const ft = randFT();
    } else { // Otherwise, send back a 405; this is only taking GET requests.
        res.setHeader('Allow', ['GET']);
        res.status(405).end('Method ${req.method} Not Allowed');
    }
}

// Picks the flavor text at the requested index, or if left blank, a random one
function randFT(n = Math.floor(Math.random() * ft.length)) {
    return ft[n];
}

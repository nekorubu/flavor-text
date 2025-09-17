// This code was mainly written by Claude. I used it to try and get the API up and running, then changed a few variables once it was finally running.
// Directory where random text should be.
const ft = require('../data/text.json');

export default function handler(req, res) {
    // If the request is a GET one, send back a random flavor text
    if (req.method === 'GET') {
        const flavor = randFT(); // Get random flavor text
        res.status(200).json(flavor);
    } else { // Otherwise, send back a 405; this is only taking GET requests.
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Picks the flavor text at the requested index, or if left blank, a random one
function randFT(n = Math.floor(Math.random() * ft.length)) {
    return ft[n];
}

export default function handler(req, res) {
    // If the request is a GET one, send back a healthy response
    if (req.method === 'GET') {
        res.status(200).json({status: 'healthy'});
        // NOTE: I should probably implement responses for other statuses
    } else { // Otherwise, send back a 405; this is only taking GET requests.
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

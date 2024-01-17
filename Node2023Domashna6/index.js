//? Servis koj kje obrabotuva ruti od sledniot tip
//? 15 iminja po zelba
//? /ime/bojan

//? parno: ne, karakteri: 5, soglaski: 3, samoglaski: 2

const http = require('http');
const port = 3000;

// Request handler function
const handler = (req, res) => {
    // Extracting the 'ime' (name) from the URL
    const [_, shto, ime] = req.url.split('/');

    // Initializing counters for vowels (samoglaski) and consonants (soglaski)
    let samoglaski = 0, soglaski = 0;

    // Checking if 'ime' is a string (for safety)
    if (typeof(ime) == 'string') {
        // Looping through each character in the name to count vowels and consonants
        for (let i = 0; i < ime.length; i++) {
            if (ime[i] == 'a' || ime[i] == 'e' || ime[i] == 'i' || ime[i] == 'o' || ime[i] == 'u') {
                samoglaski++;
            } else {
                soglaski++;
            }
        }
    }

    // Calculating whether the total number of characters is even or odd
    let parno = (samoglaski + soglaski) % 2 ? 'ne' : 'da';

    // Sending the response with information about the name
    res.write(`ime: ${ime}, parno: ${parno}, karakteri: ${samoglaski + soglaski}, soglaski: ${soglaski}, samoglaski: ${samoglaski}`);
    res.end();
};

// Creating the HTTP server and setting the request handler
const server = http.createServer(handler);

// Starting the server on port 3000
server.listen(port, '127.0.0.1', (err) => {
    if (err) console.log('error');
    console.log('Server started on port ' + port);
});

//http://localhost:3000/ime/bojan
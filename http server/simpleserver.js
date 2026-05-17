const http = require("http");

//create server
const server = http.createServer((req,res) => {
    //set response type

     res.setHeader("Content-Type", "text/plain");

    // 3. Check URL (routing)
    if (req.url === "/") {
        res.end("Home Page");
    }

    else if (req.url === "/about") {
        res.end("About Page");
    }

    else if (req.url === "/contact") {
        res.end("Contact Page");
    }

    else {
        res.end("404 Page Not Found");
    }
});

// 4. Start server on port 3000
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
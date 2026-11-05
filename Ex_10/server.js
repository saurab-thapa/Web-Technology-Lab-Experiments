const http = require("http");
const fs = require("fs");
const { MongoClient } = require("mongodb");

const PORT = 3000;
const client = new MongoClient("mongodb://localhost:27017");

const server = http.createServer(async (req, res) => {

    // Display HTML, CSS and JS files
    if (req.method === "GET") {

        let file = "public" + (req.url === "/" ? "/index.html" : req.url);

        if (!["public/index.html", "public/styles.css", "public/script.js"].includes(file)) {
            res.writeHead(404);
            return res.end("File not found");
        }

        fs.readFile(file, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end("File not found");
            }

            let type = file.endsWith(".html") ? "text/html" :
                       file.endsWith(".css") ? "text/css" : "text/javascript";

            res.writeHead(200, { "Content-Type": type });
            res.end(data);
        });
    }

    // Receive registration form data
    else if (req.url === "/server" && req.method === "POST") {

        let data = "";

        req.on("data", chunk => {
            data += chunk;
        });

        req.on("end", async () => {

            try {
                let form = new URLSearchParams(data);

                let user = {
                    name: form.get("name"),
                    password: form.get("password"),
                    age: form.get("age"),
                    mobile: form.get("mobile"),
                    email: form.get("email"),
                    gender: form.get("gender"),
                    state: form.get("state"),
                    skills: form.getAll("skills").join(", ")
                };

                // Connect to MongoDB
                await client.connect();

                let db = client.db("college");

                // Insert user details
                await db.collection("users").insertOne(user);

                // Retrieve saved details
                let users = await db.collection("users").find().toArray();

                // Create table rows
                let rows = users.map(u => `
                    <tr>
                        <td>${safe(u.name)}</td>
                        <td>${safe(u.password)}</td>
                        <td>${safe(u.age)}</td>
                        <td>${safe(u.mobile)}</td>
                        <td>${safe(u.email)}</td>
                        <td>${safe(u.gender)}</td>
                        <td>${safe(u.state)}</td>
                        <td>${safe(u.skills)}</td>
                    </tr>
                `).join("");

                // Display submitted details
                res.writeHead(200, { "Content-Type": "text/html" });

                res.end(`
                    <html>
                    <head>
                        <title>User Details</title>
                        <style>
                            body { font-family: Arial; padding: 20px; }
                            h1 { text-align: center; color: blue; }
                            table { width: 100%; border-collapse: collapse; }
                            th, td { border: 1px solid gray; padding: 10px; }
                            th { background: #5145b5; color: white; }
                        </style>
                    </head>
                    <body>
                        <h1>User Submitted Details</h1>

                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Password</th>
                                <th>Age</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>State</th>
                                <th>Skills</th>
                            </tr>
                            ${rows}
                        </table>

                        <br>
                        <a href="/">Register Another User</a>
                    </body>
                    </html>
                `);

            } catch (error) {
                console.log(error);
                res.writeHead(500);
                res.end("Database connection error");
            }
        });
    }

    else {
        res.writeHead(404);
        res.end("Page not found");
    }

});

// Escape HTML characters before displaying database values
function safe(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[c]);
}

// Start server
server.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});
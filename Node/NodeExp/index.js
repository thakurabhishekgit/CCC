// // import url from "url";
// // const data  =  new url.URL("https://www.example.com:8080/path/to/resource?param1=value1&param2=value2#fragment");
// // console.log(data);
// // console.log(data.href);


// import http from "http";
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello, Node.js!");
    
// });
// const port = 8000;
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);

// });

import url from "url";
import http from "http";
// let server = http.createServer((req, res) => {
//     let myurl = url.parse(req.url, true);
//     console.log(myurl);
//     if (myurl.pathname == "/") {
//         let name = myurl.query.name || "ccc";
//         let age = myurl.query.age || "20";
//         let gender = myurl.query.gender || "gay";
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         let personality = "";
//         if (gender == "male") {
//             personality = "handsom";
//         } else if (gender == "female") {
//             personality = "pretty";
//         } else {
//             personality = "gay";
//         }
//         res.end(`Hello, ${name}! You are ${age} years old. You are ${gender}. You are ${personality}.` );
//     }
    
// })


//json

const server = http.createServer((req, res) => {
    let myurl = url.parse(req.url, true);
    console.log(myurl);
    if (myurl.pathname == "/") {
        let name = myurl.query.name || "ccc";
        let age = myurl.query.age || "20";
        let gender = myurl.query.gender || "gay";
        let cgpa = myurl.query.cgpa || "10";
        res.writeHead(200, { "Content-Type": "application/json" });
        let personality = "";
        if (gender == "male") {
            personality = "handsom";
        } else if (gender == "female") {
            personality = "pretty";
        } else {
            personality = "gay";
        }
        res.end(JSON.stringify({ name, age, gender, cgpa }) );
    }
})
const port = 8000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
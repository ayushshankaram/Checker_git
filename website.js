
const http = require('http');
const fs = require('fs');

const port = process.env.port || 1000 ;

const server = http.createServer((req,res) => {
    console.log(req.url)
   
    res.setHeader('Content-Type','text/html ')


    if (req.url=='/'){
        res.statusCode = 200 ;
        res.end('<form action="/action.php"><h3>Registration Form</h3><input type="text" placeholder="Enter your G-suite id here"><br><br><input type="password" placeholder="Enter your password here"><br><br><h3>Parth kya hai?</h3><input type="radio" name="class" class="Chad">Chad<input type="radio" name="class" class="Simp">Simp<br><br><h3>Parth ko Rate karo ;)</h3><input type="checkbox" name="class" value="0">0<input type="checkbox" name="class" value="0.1">0.1<input type="checkbox" name="class" value="0.0001">0.0001<input type="checkbox" name="class" value="Negative rating dunga">Negative Rating dunga<br><br>');

    }
    else if (req.url=='/about'){
        res.statusCode = 200 ;
        res.end('<form action="/action.php"><h3>About Registration Form</h3><input type="text" placeholder="Enter your G-suite id here"><br><br><input type="password" placeholder="Enter your password here"><br><br><h3>Parth kya hai?</h3><input type="radio" name="class" class="Chad">Chad<input type="radio" name="class" class="Simp">Simp<br><br><h3>Parth ko Rate karo ;)</h3><input type="checkbox" name="class" value="0">0<input type="checkbox" name="class" value="0.1">0.1<input type="checkbox" name="class" value="0.0001">0.0001<input type="checkbox" name="class" value="Negative rating dunga">Negative Rating dunga<br><br>');

    }
    else if (req.url=='/hello'){
        const data = fs.readFileSync('index.html');
        res.end(data.toString());

    }
    else {
        res.statusCode = 404 ;
        res.end('<h1> Page not Found </h1> <p> Sorry for Inconvinience </p>')
    }


})

server.listen(port , ()=>{
    console.log(`Server is Listening on Port ${port}`)
}); 

 
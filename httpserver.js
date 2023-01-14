const http = require('http');

const port = process.env.port || 3000 ;

const server = http.createServer((req,res) => {
    console.log(req.url)
    res.statusCode = 200 ;
    res.setHeader('Content-Type','text/html ')
    res.end('<form action="/action.php"><h3>Registration Form</h3><input type="text" placeholder="Enter your G-suite id here"><br><br><input type="password" placeholder="Enter your password here"><br><br><h3>Parth kya hai?</h3><input type="radio" name="class" class="Chad">Chad<input type="radio" name="class" class="Simp">Simp<br><br><h3>Parth ko Rate karo ;)</h3><input type="checkbox" name="class" value="0">0<input type="checkbox" name="class" value="0.1">0.1<input type="checkbox" name="class" value="0.0001">0.0001<input type="checkbox" name="class" value="Negative rating dunga">Negative Rating dunga<br><br>');
})

server.listen(port , ()=>{
    console.log(`Server is Listening on Port ${port}`)
}); 

 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.end('Server is Listening');
});

app.get("/input", (req, res) => {
  var input = req.query.string;
  var str = input.split("");
  const s = str.map(myFunction);
  function myFunction(value){
      function isNumeric(value) {
          return /^-?\d+$/.test(value);
      }
      function isSmall(value) {
          return /^[a-z]+$/.test(value);
      }
      function isUpper(value) {
          return /^[A-Z]+$/.test(value);
      }
  
  if (isNumeric(value)) {
      var i = str.indexOf(value);
      str[i] = '[0-9]';
  }
  else if (isSmall(value)){
      var i = str.indexOf(value);
      str[i] = '[a-z]';
  }
  else if (isUpper(value)){
      var i = str.indexOf(value);
      str[i] = '[A-Z]';
  }
  else{
      var i = str.indexOf(value);
      str[i] = "\\" + value;
  }
}
  let sol = str.join("");
  regex = RegExp(sol)
  res.send('Regex : '+ regex);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
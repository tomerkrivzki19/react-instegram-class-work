const express = require('express');
const app = express();
const port = 4000;
const mongooes = require('mongoose')


// moongoes access:
mongooes
  .connect('mongodb://127.0.0.1:27017')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`at mongoose connect: ${err.message}`);
  });

const userError = new TypeError("Something happened!");
//   const RedirectionErr = new ErrorEvent("Something happened!");
const serverErr = new SyntaxError("Something happened!");

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('Special', {
    imagePath: '/path/to/your/image.jpg',
    text: 'Hello, world!'
  });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
      });

      
const express= require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs");


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp', );
  console.log("Connected to MongoDB");
}

app.get('/', (req, res) => {
  res.send('Welcome to the WhatsApp Clone API');
}); 

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
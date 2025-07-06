const express= require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');


app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded data

app.set("view engine", "ejs");


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp', );
  console.log("Connected to MongoDB");
}

//index route

app.get('/chats', async (req, res) => {
  try {
    let chats = await Chat.find({}); // fetch all chats from DB
    console.log(chats);
    res.render("index", { chats: chats }); // render the index.ejs file with the chats data
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/', (req, res) => {
  res.render('root'); // render the beautiful root.ejs page
}); 

app.get('/chats/new', (req, res) => {
  res.render('new'); // render the new.ejs file to create a new chat
});

//crete new chat route
app.post('/chats', async (req, res) => {
  let { from, to, msg } = req.body; // get the chat data from the request body
  //req.bodyt ka dat aparse karnaparta hai.
  let newChat = new Chat({ 
    from:from,
    to:to,
    msg:msg,
    created_at:new Date()
   }); // create a new chat instance
    newChat.save() // save the new chat to the database
    .then(() => {
      console.log("New chat created successfully");
      res.redirect('/chats'); // redirect to the chats page after successful creation
    })
    .catch(err => {
      console.error("Error creating new chat:", err);
      res.status(500).send("Internal Server Error");
    });
  });

// Edit chat form route
app.get('/chats/:id/edit', async (req, res) => {
  try {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    if (!chat) {
      return res.status(404).send('Chat not found');
    }
    res.render("edit",{chat}); // render the edit form with the chat data
  } catch (err) {
    console.error('Error loading edit form:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Update chat route using PUT method
app.put('/chats/:id', async (req, res) => {
  try{
    const { id } = req.params;
    let {msg} = req.body; // get the updated message from the request body
    await Chat.findByIdAndUpdate(id, { msg: msg, created_at: new Date() },{runValidators
    :true,new:true}); // update the chat message and timestamp
    res.redirect('/chats'); 

  }catch (err) {
    console.error("Error updating chat:", err);
    res.status(500).send("Internal Server Error");
  }
});
//destroy chat route using DELETE method

app.delete('/chats/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id); // delete the chat by ID
    res.redirect('/chats'); // redirect to the chats page after deletion
  } catch (err) {
    console.error("Error deleting chat:", err);
    res.status(500).send("Internal Server Error");
  }
});
  

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
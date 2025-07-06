const mongoose = require('mongoose');
const Chat = require('./models/chat.js');


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp', );
  console.log("Connected to MongoDB");
}

let allChats=[
    {
  from: "sans",
  to: "sachin",
  msg: "Hello, how are you?",
  created_at: new Date()  //dat has z in last . tells about UTC time
},
    {
  from: "sachin",
  to: "sans",
  msg: "I am fine, thank you! How about you?",
  created_at: new Date()  //dat has z in last . tells about UTC time
},
    {
  from: "sans",
  to: "sachin",
  msg: "I am doing well, thanks for asking!",
  created_at: new Date()  //dat has z in last . tells about UTC time
},
    {
  from: "sachin",
  to: "sans",
  msg: "Great to hear that! Let's catch up soon.",
  created_at: new Date()  //dat has z in last . tells about UTC time
}


];
Chat.insertMany(allChats)
  .then(() => console.log("All chats saved successfully"))
  .catch(err => console.error("Error saving chats:", err));

See Demo Here: https://drive.google.com/file/d/1qGwcoETdhKMHrFqkWM6o6lTh5t6Io5LK/view?t=23

A simple chat application built with Node.js, Express, MongoDB, and EJS. Users can create, view, edit, and delete chat messages. The app features a beautiful landing page and a modern UI.


## Features
- Beautiful landing page with image and navigation
- View all chat messages
- Create a new chat message
- Edit existing messages
- Delete messages
- Responsive and modern UI with custom CSS

## Folder Structure
```
├── index.js           # Main server file
├── package.json       # Project dependencies
├── models/
│   └── chat.js        # Mongoose schema for chat messages
├── public/
│   ├── style.css      # Main stylesheet
│   ├── root.js        # JS for landing page button
│   └── image.png      # Landing page image
├── views/
│   ├── root.ejs       # Landing page
│   ├── index.ejs      # Chat list page
│   ├── new.ejs        # New chat form
│   └── edit.ejs       # Edit chat form
```

## Setup Instructions
1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start MongoDB** (make sure MongoDB is running locally)
4. **Run the app**
   ```bash
   npm start
   # or if using nodemon
   nodemon index.js
   ```
5. **Open your browser** and go to [http://localhost:8080](http://localhost:8080)

## Usage
- The landing page (`/`) welcomes users and provides a button to go to the chats page.
- `/chats` displays all chat messages.
- `/chats/new` allows you to create a new chat message.
- Each message can be edited or deleted.

## Dependencies
- express
- mongoose
- ejs
- method-override

## License
MIT

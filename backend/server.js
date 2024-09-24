require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require('express-session');
const MongoStore = require('connect-mongo');

//DataBase
const db_url = process.env.DB_URL
mongoose
  .connect(db_url)
  .then(() => console.log("Connected to the DataBase"))
  .catch((error) => console.log(`Not! connected to the DataBase${error}`));

const app = express();

const store = MongoStore.create({
  mongoUrl: db_url,
  crypto: {
      secret: process.env.SESSION_SCRECT,
  },
  touchAfter: 24* 3600,
});

store.on("error", (err)=> {
  console.log("ERROR in Mongo Session Store", err)
})

// Sessions for Login
const sessionOptions = {
  store,
  secret: process.env.SESSION_SCRECT,
  resave: false,
  saveUninitialized: true,
  cookie: {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,  //7 Days Login Period
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
  },
};

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);


app.use(session(sessionOptions));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res )=> {
  res.send("Hello")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
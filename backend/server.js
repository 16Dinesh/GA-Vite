if(process.env.NODE_ENV != "production") {
    require('dotenv').config()
}
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require('express-session');
const MongoStore = require('connect-mongo');

//Routes
// const authRouter = require("./routes/auth/auth-routes");
// const adminProductsRouter = require("./routes/admin/products-routes");
// const adminOrderRouter = require("./routes/admin/order-routes");

// const gaProductsRouter = require("./routes/ga/products-routes");
// const gaCartRouter = require("./routes/ga/cart-routes");
// const gaAddressRouter = require("./routes/ga/address-routes");
// const gaOrderRouter = require("./routes/ga/order-routes");
// const gaSearchRouter = require("./routes/ga/search-routes");
// const gaReviewRouter = require("./routes/ga/review-routes");

// const commonFeatureRouter = require("./routes/common/feature-routes");


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
    origin: "http://localhost:5173",
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
// app.use("/api/auth", authRouter);
// app.use("/api/admin/products", adminProductsRouter);
// app.use("/api/admin/orders", adminOrderRouter);

// app.use("/api/ga/products", gaProductsRouter);
// app.use("/api/ga/cart", gaCartRouter);
// app.use("/api/ga/address", gaAddressRouter);
// app.use("/api/ga/order", gaOrderRouter);
// app.use("/api/ga/search", gaSearchRouter);
// app.use("/api/ga/review", gaReviewRouter);

// app.use("/api/common/feature", commonFeatureRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
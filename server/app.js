const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const app = express();

// dotenv configuration
dotenv.config();

// Api middlewares
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDatabase();

// Api routes
const userRoute = require("./routes/userRoute");
app.use("/api/v1", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

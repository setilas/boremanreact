const express = require("express");
const app = express();
const dbconnect = require("./config/db");
dbconnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server connected at port no ${PORT}`));

app.use(express.json({ extended: false }));

app.use("/api/user/", require("./routes/api/Enquiry"));

const express = require("express");
const app = express();
const dbconnect = require("./config/db");
dbconnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server connected at port no ${PORT}`));

app.use(express.json({ extended: false }));

app.use("/api/user", require("./routes/api/User/user"));
app.use("/api/auth", require("./routes/api/User/auth"));
app.use("/api/user/enquiry", require("./routes/api/User/Enquiry"));
app.use("/api/admin/vendor", require("./routes/api/Admin/Vendor"));
// app.use("/api/admin/adminuser",require("./routes/api/Admin/adminuser"))

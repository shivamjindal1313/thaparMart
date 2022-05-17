// C:\Program Files\MongoDB\Server\5.0\bin\mongo
const mongoose = require("mongoose");


//connection creation and creating a new database
mongoose.connect("mongodb://localhost:27017/registration",{
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
}).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

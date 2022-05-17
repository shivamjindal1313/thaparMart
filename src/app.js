const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000; //random localhost in whole world is assigned

require("./db/conn") //connection with express and mongoDB
const login = require("./models/login");   //collection name 


//static website hosted on localhost
const static_path = path.join(__dirname,"../public");  //E:\Campus Prep\projects\thapar_mart\public
const template_path = path.join(__dirname,"../templates/views");    
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs"); //for hbs(handlebar) file 
app.set("views",template_path);
hbs.registerPartials(partials_path);

// about
// chatbot
// contact
// foodjoints-
// form-
// landing- 
// main-
// sips-

//nodejs - backend(localhost)
app.get("/", (req,res) => {
    res.render("landing"); //hbs  //index
});


app.get("/form", (req,res) => {
    res.render("form"); //hbs 
});


app.get("/main", (req,res) => {
    // res.send("hello from kashin gupta");  //html
    res.render("main"); //hbs 
});

app.get("/sips", (req,res) => {
    res.render("sips"); //hbs 
});

app.get("/foodjoints", (req,res) => {
    res.render("foodjoints"); //hbs 
});

app.get("/contact", (req,res) => {
    res.render("contact"); //hbs 
});

app.get("/chatbot", (req,res) => {
    res.render("chatbot"); //hbs 
});

app.get("/about", (req,res) => {
    res.render("about"); //hbs 
});


app.get("/daily", (req,res) => {
    res.render("daily"); //hbs 
});

app.get("/stationary", (req,res) => {
    res.render("stationary"); //hbs 
});

app.get("/fresh", (req,res) => {
    res.render("fresh"); //hbs 
});

app.get("/cart", (req,res) => {
    res.render("cart"); //hbs 
});

app.post("/login", async(req,res) => {
    try{
        const loginEmp = new login({
            fullName: req.body.full_name,        
            email: req.body.email,
            password: req.body.password
        });
        const logged_in = await loginEmp.save();
        res.status(201).render("main");
    } catch(error){
        res.status(400).send(error);
    }
});
app.listen(port,() => {
    console.log(`server is running at port no. ${port}`);
});



// ====================================
// REQUIRE NECESSARY PACKAGES (EXPRESS)
// ====================================
const express = require("express"),
    app = express();

// =================
// APP CONFIGURATION
// =================
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ==================
// APPLICATION ROUTES
// ==================
app.get("/", (req, res) => {
    res.render("main");
});

app.get("*", (req, res) => {
    res.redirect("/");
});

// ==============
// SERVER STARTUP
// ==============
app.listen(3000, () => {
    console.log("Server is running!");
});
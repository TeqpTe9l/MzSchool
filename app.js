const express = require("express");
const expressHbs = require("express-handlebars");
const http = require("http");
const hbs = require("hbs");
const path = require('path');
const app = express();
const port = 3000
const homeRouter = require("./routes/homeRouter.js");
const studRouter = require("./routes/studRouter.js");
const teacherRouter = require("./routes/teacherRouter.js");

app.use(express.static(path.join(__dirname, 'elem/css')));
app.use(express.static(path.join(__dirname, 'elem/scripts')));
app.use(express.static(path.join(__dirname, 'elem/image')));

app.engine("hbs", expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs"
}))

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
hbs.registerPartials(__dirname + "/views/partials");

app.use("/teacher", teacherRouter);;
app.use("/stud", studRouter);;
app.use("/", homeRouter);

app.listen(port, () => {
    console.log(`Сервер запущен на ${port} порту`)
})
module.exports.app = app;
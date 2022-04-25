const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "danil",
    database: "Myzschool",
    password: "danil2003",
    dateStrings: true
});

exports.addStud = function(request, response) {
    response.render("createStud.hbs", {
        title: 'Добавление ученика'
    });
};

exports.postStud = function(request, response) {
    if (!request.body) return response.sendStatus(400);
    const fam = request.body.fam;
    const name = request.body.name;
    const oth = request.body.oth;
    const dr = request.body.dr;
    const adr = request.body.adr;
    const nom = request.body.nom;
    const klas = request.body.klas;
    const ball = request.body.ball;
    const srok = request.body.srok;
    pool.query("INSERT INTO Mzstud (Фамилия, Имя, Отчество, Дата_рождения, Адрес, Номер_телефона, Класс, Балл_учащегося, Срок_обучения) VALUES (?,?,?,?,?,?,?,?,?)", [fam, name, oth, dr, adr, nom, klas, ball, srok], function(err, data) {
        if (err) return console.log(err);
        response.redirect("/stud");
    });
};

exports.sendStud = function(request, response) {
    if (!request.body) return response.sendStatus(400);
    const fam = request.body.fam;
    const name = request.body.name;
    const oth = request.body.oth;
    const dr = request.body.dr;
    const adr = request.body.adr;
    const nom = request.body.nom;
    const klas = request.body.klas;
    const ball = request.body.ball;
    const srok = request.body.srok;
    const id = request.body.id;
    pool.query("UPDATE Mzstud SET Фамилия=?, Имя=?, Отчество=?, Дата_рождения=?, Адрес=?, Номер_телефона=?, Класс=?, Балл_учащегося=?, Срок_обучения=? WHERE id=?", [fam, name, oth, dr, adr, nom, klas, ball, srok, id], function(err, data) {
        if (err) return console.log(err);
        response.redirect("/stud");
    });
};

exports.editStud = function(request, response) {
    const id = request.params.id;
    pool.query("SELECT * FROM Mzstud WHERE id=?", [id], function(err, data) {
        if (err) return console.log(err);
        response.render("editStud.hbs", {
            stud: data[0],
            title: 'Редактирование ученика'
        });
    });
};

exports.delStud = function(request, response) {
    const id = request.params.id;
    pool.query("DELETE FROM Mzstud WHERE id=?", [id], function(err, data) {
        if (err) return console.log(err);
        response.redirect("/stud");
    });
};

exports.getStud = function(request, response) {
    pool.query("SELECT * FROM Mzstud", function(err, data) {
        if (err) return console.log(err);
        response.render("stud.hbs", {
            stud: data,
            title: 'Обучающиеся'
        });
    });
};
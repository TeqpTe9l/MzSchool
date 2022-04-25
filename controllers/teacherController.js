const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "danil",
    database: "Myzschool",
    password: "danil2003",
    dateStrings: true
});

exports.addTeacher = function(request, response) {
    response.render("createTeacher.hbs", {
        title: 'Добавление учителя'
    });
};

exports.postTeacher = function(request, response) {
    if (!request.body) return response.sendStatus(400);
    const fam = request.body.fam;
    const name = request.body.name;
    const oth = request.body.oth;
    const dr = request.body.dr;
    const dol = request.body.dol;
    const zp = request.body.zp;
    const nom = request.body.nom;
    const sta = request.body.sta;
    const adr = request.body.adr;
    pool.query("INSERT INTO Mzteacher (Фамилия, Имя, Отчество, Дата_рождения, Должность, Зарплата, Номер_телефона, Стаж, Адрес) VALUES (?,?,?,?,?,?,?,?,?)", [fam, name, oth, dr, dol, zp, nom, sta, adr], function(err, data) {
        if (err) return console.log(err);
        response.redirect("/teacher");
    });
};

exports.sendTeacher = function(request, response) {
    if (!request.body) return response.sendStatus(400);
    const fam = request.body.fam;
    const name = request.body.name;
    const oth = request.body.oth;
    const dr = request.body.dr;
    const dol = request.body.dol;
    const zp = request.body.zp;
    const nom = request.body.nom;
    const sta = request.body.sta;
    const adr = request.body.adr;
    const id = request.body.id;
    pool.query("UPDATE Mzteacher SET Фамилия=?, Имя=?, Отчество=?, Дата_рождения=?, Должность=?, Зарплата=?, Номер_телефона=?, Стаж=?, Адрес=? WHERE id=?", [fam, name, oth, dr, dol, zp, nom, sta, adr, id], function(err, data) {
        if (err) return console.log(err);
        response.redirect("/teacher");
    });
};

exports.editTeacher = function(request, response) {
    const id = request.params.id;
    pool.query("SELECT * FROM Mzteacher WHERE id=?", [id], function(err, data) {
        if (err) return console.log(err);
        response.render("editTeacher.hbs", {
            teacher: data[0],
            title: 'Редактирование учителя'
        });
    });
};

exports.delTeacher = function(request, response) {
    const id = request.params.id;
    pool.query("DELETE FROM Mzteacher WHERE id=?", [id], function(err, data) {
        if (err) return console.log(err);
        response.redirect("/teacher");
    });
};

exports.getTeacher = function(request, response) {
    pool.query("SELECT * FROM Mzteacher", function(err, data) {
        if (err) return console.log(err);
        response.render("teacher.hbs", {
            teacher: data,
            title: 'Учителя'
        });
    });
};
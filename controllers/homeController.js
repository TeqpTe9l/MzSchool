exports.contact = function(request, response) {
    response.render("contact.hbs", {
        title: "Контакты",
    });
};

exports.about = function(request, response) {
    response.render("about.hbs", {
        title: "О нас",
    });
};

exports.home = function(request, response) {
    response.render("home.hbs", {
        title: "Музыкальная школа",
    });
};
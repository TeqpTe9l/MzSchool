const request = require("supertest");
 
var app = require("../app").app;
 
describe("homeController Test", function(){
it("homeViews Test", function(done){
     
    request(app)
        .get("/")
        .accept("home.hbs")
        .end(done);
});

it("aboutViews Test", function(done){
     
    request(app)
        .get("/about")
        
        .accept("about.hbs")
        .end(done);
});

it("contactViews Test", function(done){
     
    request(app)
        .get("/contact")
        .accept("contact.hbs")
        .end(done);
});
})
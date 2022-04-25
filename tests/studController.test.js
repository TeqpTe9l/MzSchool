const request = require("supertest");
 
var app = require("../app").app;
 
describe("studController Test", function(){
it("studViews Test", function(done){
     
    request(app)
        .get("/stud")
        .accept("stud.hbs")
        .end(done);
});

it("createStudViews Test", function(done){
     
    request(app)
        .get("/stud/createStud")
        .accept("createStud.hbs")
        .end(done);
});

it("editStudViews Test", function(done){
     
    request(app)
        .get("/stud/editStud")
        .accept("editStud.hbs")
        .end(done);
});
})
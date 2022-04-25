const request = require("supertest");
 
var app = require("../app").app;
 
describe("teacherController Test", function(){
it("teacherViews Test", function(done){
     
    request(app)
        .get("/teacher")
        .accept("teacher.hbs")
        .end(done);
});

it("createTeacherViews Test", function(done){
     
    request(app)
        .get("/stud/createTeacher")
        .accept("createTeacherhbs")
        .end(done);
});

it("editTeacherViews Test", function(done){
     
    request(app)
        .get("/stud/editTeacher")
        .accept("editTeacher.hbs")
        .end(done);
});
})
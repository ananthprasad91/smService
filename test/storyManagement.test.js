var assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app')
var mongoose = require('mongoose');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJiMDFlNjVhOTJlNTQ1Nzg5MDg3ZGUiLCJpYXQiOjE1Nzk4ODA3MjQsImV4cCI6MTU3OTg4MDc4NH0.9U_yK9uwzcAoXrctl7nGrosU4ed6unUThUoY96ZC12M";
chai.use(chaiHttp);
chai.should();

describe("Story Management test", () => {
    describe("POST /", () => {        
        it("should  create story successfully", (done) => {
            var req= { "userId" :"1000000255444", "title":"title 1", "storyBody":"Welcome to AXA" }         
            chai.request(app)
                .set("Authorization", "Bearer " + token) //set the header first
                .post('/api/sm/createStory')                 
                 .send(req)
                 .end((err, res) => {
                     debugger;
                    // console.log('aa');
                     console.log(res);
                     res.should.have.status(201);
                     //res.body.should.be.a('object');
                     done();
                  });
         });         
    });
});
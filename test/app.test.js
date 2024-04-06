const chai = require("chai");
const chaiHttp = require("chai-http");
const { userModel } = require("../models/user.model");
const { taskModel } = require("../models/task.model");
const { server } = require("../server");
chai.use(chaiHttp);
const should = chai.should();
describe("User Routes", () => {
  describe("POST /register", () => {
    it("should register a new user", (done) => {
      const newUser = {
        name: "test User",
        email: "test@example.com",
        password: "password123",
      };

      chai
        .request(server)
        .post("/register")
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("msg").eql("User Has Been Registered");
          done();
        });
    });
  });

  describe("POST /login", () => {
    it("should log in an existing user", (done) => {
      const credentials = {
        email: "test@example.com",
        password: "password123",
      };

      chai
        .request(server)
        .post("/login")
        .send(credentials)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("msg").eql("Login Successfull");
          res.body.should.have.property("token");
          done();
        });
    });
  });
});

describe("Task Routes", () => {
  const userID = "121";

  describe("POST /", () => {
    it("should create a new task", (done) => {
      const newTask = {
        title: "New Task",
        description: "Description of the task",
        dueDate: new Date(),
        priority: "Medium",
      };

      chai
        .request(server)
        .post("/")
        .send(newTask)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("msg").eql("Task Added");
          done();
        });
    });
  });

  describe("GET /", () => {
    it("should get tasks for a user", (done) => {
      chai
        .request(server)
        .get("/")
        .set("Authorization", "Bearer YOUR_TOKEN_HERE")
        .send({ userID })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("task");
          res.body.task.should.be.a("array");
          done();
        });
    });
  });
});

describe("Models", () => {
  describe("User Model", () => {
    it("should save a new user to the database", async () => {
      const newUser = new userModel({
        name: "test User",
        email: "test@example.com",
        password: "password123",
      });

      const savedUser = await newUser.save();
      savedUser.should.be.a("object");
      savedUser.should.have.property("name").eql("test User");
      savedUser.should.have.property("email").eql("test@gmail.com");
      savedUser.should.have.property("password").not.eql("password123");
    });
  });

  describe("Task Model", () => {
    it("should save a new task to the database", async () => {
      const newTask = new taskModel({
        title: "New Task",
        description: "Description of the task",
        dueDate: new Date(),
        priority: "Medium",
      });

      const savedTask = await newTask.save();
      savedTask.should.be.a("object");
      savedTask.should.have.property("title").eql("New Task");
      savedTask.should.have
        .property("description")
        .eql("Description of the task");
      savedTask.should.have.property("dueDate");
      savedTask.should.have.property("priority").eql("Medium");
    });
  });
});

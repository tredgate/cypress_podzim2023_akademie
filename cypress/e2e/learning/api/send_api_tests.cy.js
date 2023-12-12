import { faker } from "@faker-js/faker";
import { UserApi } from "../../../api/tegb/user_api";

describe("Send HTTP Requests Tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    password = "Tredgate2023";
    email = faker.internet.email();
    username = username.toLowerCase();
    cy.log(username);
    cy.log(password);
    cy.log(email);
  });

  it("GET Tredgate Train", () => {
    cy.request("https://tegb-backend-877a0b063d29.herokuapp.com/train").then(
      (response) => {
        expect(response.status).to.eq(200);
        cy.wrap(response.body.id).as("responseId");
      }
    );
    cy.get("@responseId").should("eq", 1);
  });

  it("POST registration TEG#B", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username: username,
        password: password,
        email: email,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("userId");
      expect(response.body.username).to.eq(username);
      expect(response.body.email).to.be.a("string");
    });
  });

  it("POST Login to TEG#B", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      body: {
        username: "leann.bartoletti47",
        password: "Tredgate2023",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it("POST Login to TEG#B with objects", () => {
    new UserApi()
      .login("leann.bartoletti47", "Tredgate2023")
      .then((response) => {
        expect(response.status).to.eq(201);
      });
  });

  it("POST Registration to TEG#B with objects", () => {
    new UserApi().register(username, password, email).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

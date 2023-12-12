export class UserApi {
  register(username, password, email) {
    return cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username: username,
        password: password,
        email: email,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      body: {
        username: username,
        password: password,
      },
    });
  }
}

export class AccountsApi {
  createAccount(token, deposit, userId) {
    return cy.request({
      method: "POST",
      url: "http://localhost:3000/accounts",
      headers: {
        authorization: "Bearer " + token,
      },
      body: {
        userId: userId,
        accountType: "checking",
        transactionLimits: {
          dailyLimit: 1000,
          monthlyLimit: 5000,
        },
        deposit: deposit,
        createdAt: "2023-05-07T12:00:00.000Z",
      },
    });
  }
}

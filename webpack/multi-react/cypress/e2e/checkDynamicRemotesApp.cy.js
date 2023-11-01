describe("App1 start", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("Check app1 open", () => {
    cy.contains("App 1");
  });

  it("Check app4 contain", () => {
    cy.get('[data-e2e="APP_4__WIDGET"]').should("contain", "widget");
  });

  it("Check load app2", () => {
    cy.get('[data-e2e="Load-app2"]').click();

    cy.get('[data-e2e="APP_2__WIDGET"]').should("contain", "Widget");
  });

  it("Check load app3", () => {
    cy.get('[data-e2e="Load-app3"]').click();

    cy.get('[data-e2e="APP_3__WIDGET"]').should("contain", "Widget");
  });
});

describe("App2 start", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002");
  });

  it("Check app2 open", () => {
    cy.contains("App 2");
  });
});

describe("App3 start", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003");
  });

  it("Check app3 open", () => {
    cy.contains("App 3");
  });
});

describe("App4 start", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3004");
  });

  it("Check app4 open", () => {
    cy.contains("App 4");
  });
});

describe("Bug ionic", function() {
    it("Does not do much!", function() {
        expect(true).to.equal(true);
    });

    it("a simple test", function() {
        cy.visit("http://localhost:8100/");

        cy.contains("List").click();

        cy.url().should("include", "/list");
    });
});

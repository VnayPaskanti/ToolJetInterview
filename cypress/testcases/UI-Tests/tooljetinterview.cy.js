import ToolJetPage from "../../pages/methods/TooljetPage";
const toolJet = new ToolJetPage;
describe("Tooljet Interview", function () {

    beforeEach("Before Each case", function () {
        cy.fixture("UI-Tests/tooljetinterview").then((data) => {
            this.data = data;
            cy.visit("https://eetestsystem.tooljet.com");
            cy.login("cypresstest@tooljet.com", "password")
        })
    });

    it("Create an app from 'Create App' button", function () {
        const data = this.data;
        const homePageData = data.TS1.homePage
        toolJet.clickOnCreateNewApp();
        toolJet.addAppName(homePageData.toolJetName);
        toolJet.clickCreateAppButton();
        toolJet.verifyAppCreated(homePageData.toolJetName);
    })

    it("Create an app from 'Choose from Template' button", function () {
        const data = this.data;
        const homePageData = data.TS2.homePage
        toolJet.clickAppEllipses();
        toolJet.clickChooseFromTemplate();
        toolJet.clickTemplate();
        toolJet.createAppFromTemplate();
        toolJet.renameAppFromTemplate(homePageData.toolJetName);
        toolJet.clickCreateAppButton();
        toolJet.skipInstructions();
        toolJet.verifyAppCreated(homePageData.toolJetName);
    })

    it("Create an app from 'Improt from Device' button", function () {
        const data = this.data;
        const homePageData = data.TS3.homePage
        toolJet.clickAppEllipses();
        toolJet.clickImportFromDevice();
        toolJet.attachImportedFile();
        toolJet.renameAppFromTemplate(homePageData.toolJetName);
        toolJet.clickImportAppButton();
        toolJet.skipInstructions();
        toolJet.verifyAppCreated(homePageData.toolJetName);
    })
});
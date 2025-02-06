
const { TooljetPageObjects } = require('../objects/PageObjects')

class TooljetPage {

    clickOnCreateNewApp() {
        cy.get(TooljetPageObjects.createNewApp).click();
    };

    addAppName(toolJetName){
        cy.get(TooljetPageObjects.appNameTextbox).type(toolJetName);
    }

    clickCreateAppButton(){
        cy.get(TooljetPageObjects.createAppButton).click();
    }

    verifyAppCreated(toolJetName){
        cy.get(TooljetPageObjects.appHeaderName, { timeout: 60000 }).should('have.value', toolJetName);
    }

    clickAppEllipses(){
        cy.get(TooljetPageObjects.appCreationDropdown).click();
    }

    clickChooseFromTemplate(){
        cy.get(TooljetPageObjects.chooseFromTemplateOption).click();
    }

    clickImportFromDevice(){
        cy.get(TooljetPageObjects.importFromDeviceOption).click();
    }

    clickTemplate(){
        cy.get(TooljetPageObjects.templateOption).click();
    }

    createAppFromTemplate(){
        cy.get(TooljetPageObjects.creatAppFromTemplateButton).click();
    }

    renameAppFromTemplate(toolJetName){
        cy.get(TooljetPageObjects.appNameTextbox).type('{backspace}').type(toolJetName);
    }

    skipInstructions(){
        cy.get(TooljetPageObjects.skipOption, { timeout: 60000 }).click();
    }

    attachImportedFile(){
        cy.get(TooljetPageObjects.fileInputType).attachFile('test-app-export-1738839274262.json');
    }

    clickImportAppButton(){
        cy.get(TooljetPageObjects.importAppButton).click();
    }
}
export default TooljetPage;

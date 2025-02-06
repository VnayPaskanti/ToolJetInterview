class TooljetPageObjects {
    static get createNewApp() { return "[data-cy='create-new-app-button']" }
    static get appNameTextbox() { return "[data-cy='app-name-input']" }
    static get createAppButton() { return "[data-cy='+-create-app']" }
    static get appHeaderName() { return "[data-cy='app-name-input']" }
    static get appCreationDropdown() { return "[data-cy='import-dropdown-menu']" }
    static get chooseFromTemplateOption() { return "[data-cy='choose-from-template-button']" }
    static get importFromDeviceOption() { return "[data-cy='import-option-label']" }
    static get templateOption() { return "[data-cy='admin-panel-tooljet-db-list-item']" }
    static get creatAppFromTemplateButton() { return "[data-cy='create-application-from-template-button']" }
    static get skipOption() { return ".driver-close-btn" }
    static get fileInputType() { return "input[type='file']" }
    static get importAppButton() { return "[data-cy='import-app']" }
};

module.exports = {
    TooljetPageObjects
};
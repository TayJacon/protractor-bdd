const Locators = require('../Common/locators');

class TaskPage {
    constructor() {
        this.locator = new Locators();
        this.path = '/tasks'
        this.EC = protractor.ExpectedConditions;
    }

    addTask(task){
        this.locator.inputName.clear();
        this.locator.inputName.sendKeys(task.title);
        if(task.tags) {
            this.addTags(task.tags);
        }
        this.locator.addButton.click();
    }

    getItem(item){
        browser.wait(this.EC.presenceOf($('#task-board')), 3000);
        return element(by.cssContainingText('tr', item));
    }

    addTags(tags){
        tags.forEach(tag => {
            this.locator.inputTags.sendKeys(tag);
            this.locator.inputTags.sendKeys(protractor.Key.TAB);
        })
    }
}
module.exports = TaskPage;
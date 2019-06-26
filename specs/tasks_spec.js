//Using arrow function
const Locators = require('../Common/locators');
const LoginPage = require('../PageObject/login');
const TaskPage = require('../PageObject/task');
const tasksDB = require('../lib/taks-db.js');

describe('Tasks: ', () =>{

    const loginPage = new LoginPage();
    const taskPage = new TaskPage();
    const locators = new Locators();

    
    beforeAll(() => {
        loginPage.go();
        loginPage.doLogin('tj@test.com', '123456789')
        locators.newTaskButton.click();
    })

    it('Adding task with short name', () => {
        taskPage.addTask({title: 'Study'});

        expect(locators.alertInfo.getText()).toEqual('10 caracteres é o mínimo permitido.');
    })

    it('Adding task without name', () => {
        taskPage.addTask({ title: ''});

        expect(locators.alertWarn.getText()).toEqual('Nome é obrigatório.');
    })

    it('Add a task @smoke', () => {
        // task.name = 'Study node' + Math.random();
        var newTask = {title: 'Study node', tags: ['node', 'js']};
        tasksDB.deleteByName(newTask.title);
        taskPage.addTask(newTask);

        expect(taskPage.getItem(newTask.title).getText()).toContain("Em andamento");
    })
})
//This code use only jquery selector
const Locators = require('../Common/locators');

describe('Calculator', function() {
    const locator = new Locators;

    beforeEach(function(){
        browser.get('https://ng-calc.herokuapp.com/')
    })

    it('Sum values', function() {
        locator.first.sendKeys(2);
        locator.second.sendKeys(4);
        locator.calcButton.click();

        expect(locator.lastBinding.getText()).toEqual('6');
    });

    describe('Results', function(){
        it('Check result list', function() {
            scenarios = [
                {first: 2, second: 2},
                {first: 3, second: 3}
            ]

            scenarios.forEach(function(scenario) {
                locator.first.sendKeys(scenario.first);
                locator.second.sendKeys(scenario.second);
                locator.calcButton.click();                
            })
            
            var memory = locator.allResults;
    
            memory.then(function(list) {
                expect(list.length).toEqual(2);
                expect(list[0].getText()).toEqual('6');
                expect(list[1].getText()).toEqual('4');
            })
        });
    })
});
var Objects = require('../protractor/data/Object.json')
describe('Data driven Testing tests', () => {
  
  it('Test Data Reader', () => {
    
    browser.get(Objects.url);
    element(by.model(Objects.locators.homepage.firstNum_model)).sendKeys(Objects.testdata.firstnum);
    element(by.model(Objects.locators.homepage.secNum_model)).sendKeys(Objects.testdata.secnum);
    element(by.id(Objects.locators.homepage.goButton_id)).click();
    
  });
    

});
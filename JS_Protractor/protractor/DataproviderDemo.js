var Objects = require('../protractor/data/Object.json')
var using = require('jasmine-data-provider');


describe('Data driven Testing tests', () => {
  
  it('Test Data Reader', () => {
    
    browser.get(Objects.url);
    element(by.model(Objects.locators.homepage.firstNum_model)).sendKeys(Objects.testdata.firstnum);
    element(by.model(Objects.locators.homepage.secNum_model)).sendKeys(Objects.testdata.secnum);
    element(by.id(Objects.locators.homepage.goButton_id)).click();
    
  });


    using([{a: 2,b : 3},{a: 5,b : 5},{a: 15,b:5}],function(data) {
      it('Test Data Provider ', () => {
    
        browser.get(Objects.url);
        element(by.model(Objects.locators.homepage.firstNum_model)).sendKeys(data.a);
        element(by.model(Objects.locators.homepage.secNum_model)).sendKeys(data.b);
        element(by.id(Objects.locators.homepage.goButton_id)).click();
        
      });
        

    })






});
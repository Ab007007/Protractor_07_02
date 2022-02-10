const { clear } = require("console");

describe(' Non Angular application Demo', function() {

    it('Formy Application ', function() {
      browser.waitForAngularEnabled(false);
      browser.get('http://formy-project.herokuapp.com/form');
      element(by.id('first-name')).sendKeys("Aravinda");
      element(by.id('last-name')).sendKeys("H");
      element(by.id('job-title')).sendKeys("Trainer");
      browser.sleep(5000).then(function(){
        console.log("Done");
      })
    });

  });
  
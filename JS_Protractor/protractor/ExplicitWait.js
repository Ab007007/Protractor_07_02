const { clear } = require("console");

describe(' Non Angular application Demo', function() {

    // it('Formy Application ', function() {
    //   browser.waitForAngularEnabled(false);
    //   browser.get('http://formy-project.herokuapp.com/form');
    //   element(by.id('first-name')).sendKeys("Aravinda");
    //   element(by.id('last-name')).sendKeys("H");
    //   element(by.id('job-title')).sendKeys("Trainer");
    //   browser.sleep(5000).then(function(){
    //     console.log("Done");
    //   })
    // });


    it('Flipkart Application ', function() {
      browser.waitForAngularEnabled(false);
      browser.driver.manage().window().maximize();
      browser.get('https://www.flipkart.com/');
      browser.sleep(15000).then(function(){
        
         browser.getCurrentUrl().then(function(url){
          console.log("URL " + url);
        });
      })
      var expectedConditions = protractor.ExpectedConditions;
      browser.wait(expectedConditions.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
      element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();
    });
    browser.sleep(15000).then(function(){
      console.log("Done");
    })

  });
  
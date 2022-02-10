const { clear } = require("console");

describe(' Non Angular application Demo', function() {



    it('Alert demo', () => {
     
      browser.waitForAngularEnabled(false);
       browser.get('http://formy-project.herokuapp.com/switch-window');
       element(by.id('alert-button')).click();
       browser.sleep(20000).then(function(){
         console.log("Wait");
       });
       browser.switchTo().alert().getText().then(function(text){
        console.log(`Text on popuop ${text}`);
       })
       browser.switchTo().alert().accept();

    });

    
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


    // it('Flipkart Application ', function() {
    //   browser.waitForAngularEnabled(false);
    //   browser.driver.manage().window().maximize();
    //   browser.get('https://www.flipkart.com/');
    //   browser.sleep(15000).then(function(){
        
    //      browser.getCurrentUrl().then(function(url){
    //       console.log("URL " + url);
    //     });
    //   })
    //   var expectedConditions = protractor.ExpectedConditions;
    //   browser.wait(expectedConditions.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
    //   element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();


    //   browser.actions().mouseMove(element(by.xpath("//div[text()='Fashion']"))).perform();
    
        
    //   element.all(by.xpath("//div[text()='Fashion']/parent::div/following-sibling::div//a")).each(function(element,index){
    //     element.getText().then(function(text){
    //       console.log(`Index ${index} has element ${text}`);
    //     })

    //   })

    //   browser.actions().mouseMove(element(by.xpath("//div[text()='Home']"))).perform();
    
        
    //   element.all(by.xpath("//div[text()='Home']/parent::div/following-sibling::div//a")).each(function(element,index){
    //     element.getText().then(function(text){
    //       console.log(`Index ${index} has element ${text}`);
    //     })

    //   })

    //   browser.actions().mouseMove(element(by.xpath("//div[text()='Electronics']"))).perform();
    
        
    //   element.all(by.xpath("//div[text()='Electronics']/parent::div/following-sibling::div//a")).each(function(element,index){
    //     element.getText().then(function(text){
    //       console.log(`Index ${index} has element ${text}`);
    //     })

    //   })
    //   browser.sleep(15000).then(function(){
    //     console.log("Done");

    //   })
  
    // });


    
    // it('Drag and Drop demo ', () => {
    //   browser.waitForAngularEnabled(false);
    //   browser.driver.manage().window().maximize();
    //   browser.get('https://jqueryui.com/droppable/');
    //   browser.sleep(15000).then(function(){
        
    //      browser.getCurrentUrl().then(function(url){
    //       console.log("URL " + url);
    //     });
    //   })
    //   browser.switchTo().frame(element(by.css("iframe[src*='default']")).getWebElement());
    //   browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform();

    //   browser.sleep(15000).then(function(){
    //     console.log("sleep");
    //  })

    //  browser.switchTo().defaultContent();
    //  element(by.linkText('Draggable')).click().then(function(){
    //   browser.sleep(15000);
    //  })
    // });

  });
  
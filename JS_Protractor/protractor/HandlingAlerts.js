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
    

  });
  
describe('angularjs homepage', function() {

    function addition(a,b)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }
    it('should greet the named user', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
        
      addition(5,5)
      addition(25,25)
      addition(30,30)

      browser.sleep(15000).then(function(){
        console.log('Last step of the test');
      })

      element.all(by.repeater('result in memory')).count().then(function(count){
          console.log(`Total rows disply is ${count}`);

      });
    
    });

  });
  
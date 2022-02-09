describe('angularjs homepage', function() {

    it('should greet the named user', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(10);
      element(by.id('gobutton')).click();
      browser.sleep(15000).then(function(){
        console.log('Last step of the test');
      })
      expect('12').toEqual(element(by.binding('latest')).getText());
    
    });

  });
  
describe('angularjs homepage', function() {

    it('should greet the named user', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
      browser.sleep(15000).then(function(){
        console.log('Last step of the test');
      })
     
    });

  });
  
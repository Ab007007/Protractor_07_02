describe('angularjs homepage', function() {

    it('should greet the named user', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(10);
      element(by.id('gobutton')).click();
      browser.sleep(15000).then(function(){
        console.log('Last step of the test');
      })

     // console.log(element(by.css("h2[class='ng-binding']")).getText());
     //element(by.css("h2[class='ng-binding']")).getText()
     element(by.binding('latest')).getText().then(function(result){
        console.log(`Sum of two numbers is ${result}`);
     })
    });

  });
  
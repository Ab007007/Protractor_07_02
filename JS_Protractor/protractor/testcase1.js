describe('angularjs homepage', function() {

    function addition(a,b, operator='+')
    {
        element(by.model('first')).sendKeys(a);
        //element(by.model('operator')).element(by.css("option[value='"+ operator +"']")).click();
        element(by.model('operator')).all(by.tagName('option')).each(function(options){
            options.getText().then(function(symbol){
              if(operator === symbol)
              {
                options.click();
              }
            })
         })
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }
    it('should greet the named user', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
        
      element(by.model('first')).sendKeys(12);
      element(by.model('operator')).element(by.css("option[value='ADDITION']")).click();
      element(by.model('second')).sendKeys(12);
      element(by.id('gobutton')).click();
      browser.sleep(2000).then(function(){
        console.log('Last step of the test');
      })

      expect('25').toEqual(element(by.binding('latest')).getText()); 

     
    });

  });
  
describe('angularjs homepage', function() {

    function addition(a,b, operator='ADDITION')
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('operator')).element(by.css("option[value='"+ operator +"']")).click();
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }
    it('should greet the named user', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
        
      addition(5,5)
      addition(25,25,'SUBTRACTION')
      addition(30,30)

      browser.sleep(1000).then(function(){
        console.log('Last step of the test');
      })

      element.all(by.repeater('result in memory')).count().then(function(count){
          console.log(`Total rows disply is ${count}`);

      });
    
      element.all(by.repeater('result in memory')).get(0).element(by.binding('result.timestamp')).getText().then(function(date){
        console.log(`Time of first row ${date}`);
      });

      element.all(by.repeater('result in memory')).get(0).element(by.binding('result.value')).getText().then(function(value){
        console.log(`Result of first row ${value}`);
      });
      element.all(by.repeater('result in memory')).get(1).element(by.binding('result.value')).getText().then(function(value){
        console.log(`Result of SEcond row ${value}`);
      });

      element.all(by.repeater('result in memory')).get(2).element(by.binding('result.value')).getText().then(function(value){
        console.log(`Result of Third row ${value}`);
      });

      element.all(by.repeater('result in memory')).getText().then(function(rows){

        for (let row of rows) {
          console.log(row);
        }
      })

      element.all(by.repeater('result in memory')).each(function(element, index) {
        // Will print 0 First, 1 Second, 2 Third.
        element.getText().then(function (text) {
          console.log(index, text);
        });
      });
      

     
    });

    it('should ADD the named user', function() {
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
  
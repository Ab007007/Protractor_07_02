describe('Multiple tests', () => {
  
    beforeEach(function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
   
    })

    afterEach(function() {
      browser.sleep(5000).then(function(){
        console.log('Last step of the test');
      })
    })
    function operation(a,b, operator='ADDITION')
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('operator')).element(by.css("option[value='"+ operator +"']")).click();
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }
  it('Addition ', () => {
    operation(5,5)
   
  });


  it('Multiplication ', () => {
       
    operation(5,5,'MULTIPLICATION')
  });


  it('Subtraction ', () => {
    operation(25,25,'SUBTRACTION')

  });

});
// Describe a feature
describe('museumPassport', function(){

  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('initially displays blank questions', function(){
    var text = element.all(by.css('.text-answer'));
    expect(text.first().getText()).toEqual('');
  });



});

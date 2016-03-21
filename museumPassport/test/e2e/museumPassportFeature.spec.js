// Describe a feature
describe('hello world', function(){

  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('should display hello world', function(){
    var text = element(by.id('text'));
    expect(text.getText()).toContain('Hello world');
  });

  it('should display text', function(){
    var title = element(by.css('.title'));
    expect(title.getText()).toContain('Museum Passport');
  });

});

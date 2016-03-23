// Describe a feature
describe('hello world', function(){

  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('should display text', function(){
    var title = element(by.css('.title'));
    expect(title.getText()).toContain('Museum Passport');
  });

  it('should display 4 questions', function(){
    var questions = element.all(by.css('.question'));
    expect(questions.count()).toEqual(4);
    expect(questions.first().getText()).toEqual('Question 1');
  });

  it('should have tabs', function() {
    var tab = element.all(by.id('qustion-icon'));
    expect(tab.count()).toEqual(1);
  });

});

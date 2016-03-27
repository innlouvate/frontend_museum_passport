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
    expect(questions.first().getText()).toEqual('question one');
  });

  it('should have tabs', function() {
    var tab = element.all(by.id('question-icon'));
    expect(tab.count()).toEqual(1);
  });

  it('should display a sign-out icon', function() {
    element(by.id('email')).sendKeys("example@example.com");
    element(by.id('password')).sendKeys("hello123");
    element(by.buttonText('Login')).click();
    expect(browser.getCurrentUrl()).toContain('home');
    expect(element.all(by.repeater('museum in museums')).count()).toEqual(4);
    expect(element(by.buttonText('Museum 1')).isPresent()).toBeTruthy();
  });

});

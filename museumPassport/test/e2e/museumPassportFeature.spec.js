// Describe a feature
describe('museumPassport', function(){

  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('should display text', function(){
    var title = element(by.css('.title'));
    expect(title.getText()).toContain('Museum Passport');
  });

  it('should direct to the homepage on login', function(){
    element(by.id('email')).sendKeys("example@example.com");
    element(by.id('password')).sendKeys("hello123");
    element(by.buttonText('Login')).click();
    expect(element(by.id('museum-button')).isPresent()).toBeTruthy();
  });

  it('should direct to the exhibits page when clicking on museum button', function(){
    element(by.id('email')).sendKeys("example@example.com");
    element(by.id('password')).sendKeys("hello123");
    element(by.buttonText('Login')).click();
    element(by.buttonText('Science Museum')).click();
    expect(browser.getCurrentUrl()).toContain('exhibits');
  });

  it('should direct to the questions page when clicking on exhibits button', function(){
    element(by.id('email')).sendKeys("example@example.com");
    element(by.id('password')).sendKeys("hello123");
    element(by.buttonText('Login')).click();
    element(by.buttonText('Science Museum')).click();
    element(by.buttonText('First exhibit')).click();
    expect(browser.getCurrentUrl()).toContain('questions');
  });

  it('should display 4 questions', function(){
    element(by.id('email')).sendKeys("example@example.com");
    element(by.id('password')).sendKeys("hello123");
    element(by.buttonText('Login')).click();
    element(by.buttonText('Science Museum')).click();
    element(by.buttonText('First exhibit')).click();
    var questions = element.all(by.css('.question'));
    expect(questions.count()).toEqual(4);
    expect(questions.first().getText()).toEqual('question one');
  });

  it('should have tabs', function() {
    element(by.id('email')).sendKeys("example@example.com");
    element(by.id('password')).sendKeys("hello123");
    element(by.buttonText('Login')).click();
    var tab = element.all(by.id('question-icon'));
    expect(tab.count()).toEqual(1);
  });

  // it('collects user responses', functions() {
  //
  // });

});

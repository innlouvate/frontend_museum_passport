// Describe a feature
<<<<<<< HEAD
describe('questions tab', function(){

  beforeEach(function() {
    browser.get('http://localhost:8100/#/tab/questions');
    // element(by.css('#question-icon')).click();

    });
=======
describe('museumPassport', function(){

  beforeEach(function() {
    browser.get('http://localhost:8100');
    element(by.id('signup-link')).click();
    element(by.id('signup-email')).sendKeys("example@example.com");
    element(by.id('signup-password')).sendKeys("hello123");
    element(by.id('signup-password-confirm')).sendKeys("hello123");
    element(by.buttonText('Sign-up')).click();
  });
>>>>>>> 9d0e7b9aef1a407eeca016f65b76e8c122ef0ce0

  it('should display title', function(){
    var title = element(by.css('.title'));
    expect(title.getText()).toContain('Museum Passport');
  });

<<<<<<< HEAD
  it('should display 4 questions, textareas and upload buttons', function(){
    var questions = element.all(by.css('.question'));
    expect(questions.count()).toEqual(4);
    expect(questions.first().getText()).toContain('question one');
    var text_boxes = element.all(by.css('.text-answer'));
    expect(text_boxes.count()).toEqual(4);
    var uploads = element.all(by.css('.upload-button'));
    expect(uploads.count()).toEqual(4);
=======
  xit('should direct to the homepage on signup', function(){
    element(by.id('signup-link')).click();
    element(by.id('signup-email')).sendKeys("example2@example.com");
    element(by.id('signup-password')).sendKeys("hello123");
    element(by.id('signup-password-confirm')).sendKeys("hello123");
    element(by.buttonText('Sign-up')).click();
    expect(browser.getCurrentUrl()).toContain('home');
  });

  xit('should direct to the homepage on login', function(){
    element(by.id('email')).sendKeys("example@example.com");
    element(by.id('password')).sendKeys("hello123");
    element(by.buttonText('Login')).click();
    expect(browser.getCurrentUrl()).toContain('home');
    expect(element.all(by.repeater('museum in museums')).count()).toEqual(4);
    expect(element(by.buttonText('Museum 1')).isPresent()).toBeTruthy();
  });

  it('should direct to the exhibits page when clicking on museum button', function(){
    element(by.buttonText('Science Museum')).click();
    expect(browser.getCurrentUrl()).toContain('exhibits');
    expect(element.all(by.repeater('exhibit in exhibits')).count()).toEqual(4);
    expect(element(by.buttonText('Exploring Space')).isPresent()).toBeTruthy();
  });

  it('should direct to the questions page when clicking on exhibits button', function(){
    element(by.buttonText('Science Museum')).click();
    element(by.buttonText('Exploring Space')).click();
    expect(browser.getCurrentUrl()).toContain('questions');
  });

  it('should display 4 questions', function(){
    element(by.buttonText('Science Museum')).click();
    element(by.buttonText('Exploring Space')).click();
    var questions = element.all(by.css('.question'));
    expect(questions.count()).toEqual(4);
    expect(questions.first().getText()).toEqual('What is the biggest object in this gallery?');
>>>>>>> 9d0e7b9aef1a407eeca016f65b76e8c122ef0ce0
  });

  it('should have menu tab for questions', function() {
    var tab = element.all(by.id('question-icon'));
    expect(tab.count()).toEqual(1);
  });

<<<<<<< HEAD
  // it('should display 4 upload buttons', function() {
  //   var uploads = element.all(by.css('.upload-button'));
  //   expect(uploads.count()).toEqual(4);
  // });

  // it('should display 4 answer textboxes', function(){
  //   var text_boxes = element.all(by.css('.text-answer'));
  //   expect(text_boxes.count()).toEqual(4);
  // })

  it('should display photo you upload', function(){
    element(by.css('#photo-response1')).click();
    expect(browser.getCurrentUrl()).toContain('Take photo')
  })

=======
>>>>>>> 9d0e7b9aef1a407eeca016f65b76e8c122ef0ce0
});

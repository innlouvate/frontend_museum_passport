// Describe a feature
describe('hello world', function(){

  beforeEach(function() {
    browser.get('http://localhost:8100/#/tab/questions');
    // element(by.css('#question-icon')).click();

    });

  it('should display text', function(){
    var title = element(by.css('.title'));
    expect(title.getText()).toContain('Museum Passport');
  });

  it('should display 4 questions', function(){
    var questions = element.all(by.css('.question'));
    expect(questions.count()).toEqual(4);
    expect(questions.first().getText()).toContain('question one');
  });

  it('should have tabs', function() {
    var tab = element.all(by.id('question-icon'));
    expect(tab.count()).toEqual(1);
  });

  it('should display 4 upload buttons', function() {
    var uploads = element.all(by.css('.upload-button'));
    expect(uploads.count()).toEqual(4);
  });

  it('should display 4 answer textboxes', function(){
    var text_boxes = element.all(by.css('.text-answer'));
    expect(text_boxes.count()).toEqual(4);
  })

});

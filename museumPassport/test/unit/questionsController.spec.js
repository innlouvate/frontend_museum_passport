describe('QuestionController', function() {

  var ctrl, $httpBackend;

  beforeEach(module('museumPassport.questions'));

  beforeEach(inject(function(_$controller_, _$httpBackend_) {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET("dummyq.json")
        .respond({name: "Question 1"});

      ctrl = $controller('QuestionController');
    }));

  it('gets the list of test questions and passes it as json', function(){
    $httpBackend.flush();
    expect(ctrl.questions).toEqual({name: 'Question 1'});
  });

});

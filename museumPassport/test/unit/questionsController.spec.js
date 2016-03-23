describe('QuestionController', function() {

  var ctrl, $httpBackend, scope;

  beforeEach(module('museumPassport.questions'));

  beforeEach(inject(function($rootScope, _$controller_, _$httpBackend_) {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      console.log($httpBackend)
      $httpBackend
        .when('GET',"https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
        .respond({name: "Question 1"});

      console.log($httpBackend)

      ctrl = $controller('QuestionController', {$scope: scope});
      console.log(ctrl)
    }));

  it('gets the list of test questions and passes it as json', function(){
    $httpBackend
      .expectGET("https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
    $httpBackend.flush();
    expect(ctrl.questions).toEqual({name: 'Question 1'});
  });

});

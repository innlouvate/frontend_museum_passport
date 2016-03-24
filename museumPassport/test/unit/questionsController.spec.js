describe('QuestionController', function() {

  var ctrl, httpBackend, scope;

  beforeEach(module('museumPassport.questions'));

  beforeEach(inject(function($rootScope, $controller, $httpBackend) {
      // $controller = _$controller_;
      httpBackend = $httpBackend;
      scope = $rootScope.$new();
      httpBackend
        // .expectGET("https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
        .when('GET',"https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
        .respond({name: "Question 1"});

      console.log(httpBackend)
      ctrl = function() {
            return $controller('QuestionController', {
                '$scope': scope
            });
        };

      // ctrl = $controller('QuestionController', {$scope: scope});
      console.log(ctrl)
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


  it('gets the list of test questions and passes it as json', function(){
    httpBackend
      .expectGET("https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
    httpBackend.flush();
    expect(scope.questions).toEqual({name: 'Question 1'});
  });

});

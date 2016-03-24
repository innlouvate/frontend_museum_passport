describe('QuestionController', function() {

  var ctrl, httpBackend, scope, rootScope ;
  var dummyData = [{"question": {id: 1, name: "Question 1", entry: ""}}]

  beforeEach(module('museumPassport.questions'));

  beforeEach(inject(function($rootScope, $controller, $httpBackend) {
      // $controller = _$controller_;
      httpBackend = $httpBackend;
      scope = $rootScope.$new();
      rootScope = $rootScope;
      httpBackend
        // .expectGET("https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
        .when('GET',"https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
        .respond(dummyData);

      // console.log(httpBackend)
      ctrl = function() {
            return $controller('QuestionController', {
                '$scope': scope
            });
        };

      // ctrl = $controller('QuestionController', {$scope: scope});
      // console.log(ctrl)
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


  it('gets the list of test questions and passes it as json', function(){
    ctrl();
    // httpBackend
    //   .expectGET("https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
    httpBackend.flush();
    expect(scope.questions).toEqual(dummyData);
  });

  it('\n\n\nposts the response and saves to the collection array', function(){
    ctrl();
    httpBackend.flush();
    httpBackend
      .expectPOST("https://museum-passport-backend.herokuapp.com/museums/1/exhibits/1/questions/1/answers", {})
      .respond('')
    scope.collectResponses();
    httpBackend.flush();
  });
});

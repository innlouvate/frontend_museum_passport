describe('QuestionController', function() {

  var ctrl, httpBackend, scope, rootScope ;
  var dummyData = [{"question": {id: 1, name: "Question 1", entry: ""}}]

  beforeEach(module('museumPassport.questions'));

  beforeEach(inject(function($rootScope, $controller, $httpBackend) {
      httpBackend = $httpBackend;
      scope = $rootScope.$new();
      rootScope = $rootScope;
      httpBackend
        .when('GET',"https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
        .respond(dummyData);

      ctrl = function() {
            return $controller('QuestionController', {
                '$scope': scope
            });
        };
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


  it('gets the list of test questions and passes it as json', function(){
    ctrl();
    httpBackend.flush();
    expect(scope.questions).toEqual(dummyData);
  });

  it('posts the response and saves to the collection array', function(){
    ctrl();
    spyOn(scope, 'formatJson');
    scope.formatJson.and.returnValue('cat');
    httpBackend.flush();
    httpBackend
      .expectPOST("http://localhost:3000/museums/1/exhibits/1/questions/1/answers.json")
      .respond('');
    scope.collectResponses();
    httpBackend.flush();
  });
});

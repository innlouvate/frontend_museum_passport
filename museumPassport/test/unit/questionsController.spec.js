describe('QuestionController', function() {

  var ctrl, httpBackend, scope;
  var dummyData = [{"question": {id: 1, name: "Question 1", entry: ""}}]

  beforeEach(module('museumPassport.questions'));

  beforeEach(inject(function($injector) {
    // console.log(httpBackend)
      httpBackend = $injector.get('$httpBackend');
      scope = $injector.get('$rootScope');
      httpBackend
        .when('GET',"https://museum-passport-backend.herokuapp.com/museums/0/exhibits/0/questions")
        .respond(dummyData);

      var $controller = $injector.get('$controller');
      // ctrl = function() {
      //       return $controller('QuestionController', {
      //           '$scope': scope
      //       });
        // };
      ctrl = $controller('QuestionController', { $scope: scope })
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


  it('gets the list of test questions and passes it as json', function(){
    // var controller = ctrl();
    console.log('controller '+ctrl);
    httpBackend.flush();
    expect(scope.questions).toEqual(dummyData);
  });

  it('posts the response and saves to the collection array', function(){
    var controller = ctrl();
    spyOn(scope, 'formatJson');
    scope.formatJson.and.returnValue('cat');
    httpBackend.flush();
    httpBackend
      .expectPOST("http://localhost:3000/museums/1/exhibits/1/questions/1/answers.json")
      .respond('');
    scope.collectResponses();
    httpBackend.flush();
  });


  it('#addMedia calls for an image to be saved', function() {
    var controller = ctrl();
    expect(controller.addMedia()).toCall(controller.addImage())
  });
});

describe('QuestionController', function() {

<<<<<<< HEAD
  var ctrl, httpBackend, scope;
  var dummyData = [{"question": {id: 1, name: "Question 1", entry: ""}}]
=======
  var ctrl, httpBackend, scope, rootScope ;
  var dummyData = [{"question": {id: 1, name: "Question 1", answer: null}}]
>>>>>>> 9d0e7b9aef1a407eeca016f65b76e8c122ef0ce0

  beforeEach(module('museumPassport.questions'));

  beforeEach(inject(function($injector) {
    // console.log(httpBackend)
      httpBackend = $injector.get('$httpBackend');
      scope = $injector.get('$rootScope');
      httpBackend
        .when('GET',"http://localhost:3000/exhibits/1/questions")
        .respond(dummyData);

<<<<<<< HEAD
      var $controller = $injector.get('$controller');
      // ctrl = function() {
      //       return $controller('QuestionController', {
      //           '$scope': scope
      //       });
        // };
      ctrl = $controller('QuestionController', { $scope: scope })
=======
      ctrl = function() {
            return $controller('QuestionController', {
                '$scope': scope
            });
        };

>>>>>>> 9d0e7b9aef1a407eeca016f65b76e8c122ef0ce0
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
<<<<<<< HEAD
      .expectPOST("http://localhost:3000/museums/1/exhibits/1/questions/1/answers.json")
=======
      .expectPOST("http://localhost:3000/questions/1/answers.json")
>>>>>>> 9d0e7b9aef1a407eeca016f65b76e8c122ef0ce0
      .respond('');
    scope.collectResponses();
    httpBackend.flush();
  });

<<<<<<< HEAD

  it('#addMedia calls for an image to be saved', function() {
    var controller = ctrl();
    expect(controller.addMedia()).toCall(controller.addImage())
  });
=======
  it('create new entries for new user', function() {
    ctrl();
    httpBackend.flush();
    spyOn(scope, 'status');
    scope.status.and.returnValue('new');
    scope.collectResponses();
    expect(scope.recordAnswer()).toHaveBeenCalled();
  })

>>>>>>> 9d0e7b9aef1a407eeca016f65b76e8c122ef0ce0
});
